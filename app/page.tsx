'use client'

import { generateSamplePalettes } from '@/utils/colorPalettes'
import { generateRandomPalettes } from '@/utils/colorGenerator'
import ColorCard from '@/components/ColorCard'
import Sidebar from '@/components/Sidebar'
import { ColorPalette } from '@/types'
import { useState } from 'react'

export default function Home() {
	const initialPalettes = generateSamplePalettes()
	const [palettes, setPalettes] = useState<ColorPalette[]>(initialPalettes)
	const [selectedTags, setSelectedTags] = useState<string[]>([])
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [isRandomMode, setIsRandomMode] = useState(false)

	const handleFilterChange = (filter: string) => {
		if (isRandomMode) {
			setIsRandomMode(false)
			setPalettes(initialPalettes)
		}
		setSearchTerm(filter)
	}

	const handleTagSelect = (tag: string) => {
		if (isRandomMode) {
			setIsRandomMode(false)
			setPalettes(initialPalettes)
		}
		setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
	}

	const handleRandomClick = () => {
		setIsRandomMode(true)
		setSelectedTags([])
		setSearchTerm('')
		const newPalettes = generateRandomPalettes()
		setPalettes(newPalettes)
	}

	const filteredPalettes = palettes.filter((palette) => {
		if (isRandomMode) return true

		const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => palette.tags.includes(tag))

		const matchesSearch =
			searchTerm === '' ||
			palette.colors.some((color) => color.toLowerCase().includes(searchTerm.toLowerCase())) ||
			palette.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

		return matchesTags && matchesSearch
	})

	return (
		<div className="flex min-h-screen bg-gray-50">
			<Sidebar
				onFilterChange={handleFilterChange}
				onTagSelect={handleTagSelect}
				onRandomClick={handleRandomClick}
				selectedTags={selectedTags}
				isRandomMode={isRandomMode}
			/>
			<main className="flex-1 ml-64">
				<div className="container mx-auto p-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
						{filteredPalettes.map((palette) => (
							<ColorCard key={palette.id} palette={palette} />
						))}
					</div>
				</div>
			</main>
		</div>
	)
}
