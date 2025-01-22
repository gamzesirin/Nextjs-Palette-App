'use client'

import ColorCard from '@/components/ColorCard'
import Sidebar from '@/components/Sidebar'
import { ColorPalette } from '@/types'
import { useState, useEffect } from 'react'

const generateSamplePalettes = (): ColorPalette[] => {
	return [
		{
			id: '1',
			colors: ['#FF5733', '#33FF57', '#5733FF'],
			likes: 0,
			tags: ['sıcak', 'canlı'],
			createdAt: new Date()
		}
		// Diğer örnekler...
	]
}

export default function Home() {
	const [palettes, setPalettes] = useState<ColorPalette[]>([])
	const [selectedTags, setSelectedTags] = useState<string[]>([])
	const [currentFilter, setCurrentFilter] = useState<string>('')

	useEffect(() => {
		setPalettes(generateSamplePalettes())
	}, [])

	const handleFilterChange = (filter: string) => {
		setCurrentFilter(filter)
	}

	const handleLike = (paletteId: string) => {
		setPalettes((prev) =>
			prev.map((palette) => (palette.id === paletteId ? { ...palette, likes: palette.likes + 1 } : palette))
		)
	}

	const handleTagSelect = (tag: string) => {
		setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
	}

	const filteredPalettes = palettes.filter((palette) => {
		const matchesFilter =
			currentFilter === '' || palette.colors.some((color) => color.toLowerCase().includes(currentFilter.toLowerCase()))
		const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => palette.tags.includes(tag))
		return matchesFilter && matchesTags
	})

	return (
		<div className="min-h-screen bg-gray-50" suppressHydrationWarning>
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
