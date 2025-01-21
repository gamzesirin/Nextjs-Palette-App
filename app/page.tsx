'use client'

import ColorCard from '@/components/ColorCard'
import Sidebar from '@/components/Sidebar'
import { ColorPalette } from '@/types'
import { useState, useEffect } from 'react'

// Sample data - in a real app, this would come from an API
const generateSamplePalettes = (): ColorPalette[] => {
	return Array.from({ length: 12 }, (_, i) => ({
		id: `palette-${i}`,
		colors: Array.from({ length: 4 }, () => '#' + Math.floor(Math.random() * 16777215).toString(16)),
		likes: Math.floor(Math.random() * 5000),
		createdAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
		tags: ['Spring', 'Pastel', 'Light'].sort(() => Math.random() - 0.5).slice(0, 2)
	}))
}

export default function Home() {
	const [palettes, setPalettes] = useState<ColorPalette[]>(generateSamplePalettes())
	const [selectedTags, setSelectedTags] = useState<string[]>([])
	const [currentFilter, setCurrentFilter] = useState<string>('new')

	const handleFilterChange = (filter: string) => {
		setCurrentFilter(filter)
		const newPalettes = [...palettes]

		switch (filter) {
			case 'popular':
				newPalettes.sort((a, b) => b.likes - a.likes)
				break
			case 'new':
				newPalettes.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
				break
			case 'random':
				newPalettes.sort(() => Math.random() - 0.5)
				break
			default:
				break
		}

		setPalettes(newPalettes)
	}

	const handleTagSelect = (tag: string) => {
		setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
	}

	const handleLike = (id: string) => {
		setPalettes((prev) =>
			prev.map((palette) => (palette.id === id ? { ...palette, likes: palette.likes + 1 } : palette))
		)
	}

	const filteredPalettes = palettes.filter(
		(palette) => selectedTags.length === 0 || selectedTags.some((tag) => palette.tags.includes(tag))
	)

	return (
		<div className="min-h-screen bg-gray-50">
			<Sidebar onFilterChange={handleFilterChange} onTagSelect={handleTagSelect} selectedTags={selectedTags} />
			<main className="pl-64">
				<div className="container mx-auto px-6 py-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{filteredPalettes.map((palette) => (
							<ColorCard key={palette.id} palette={palette} onLike={handleLike} />
						))}
					</div>
				</div>
			</main>
		</div>
	)
}
