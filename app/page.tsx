'use client'

import { generateSamplePalettes } from '@/utils/colorPalettes'
import ColorPalette from '@/components/ColorPalette'
import Sidebar from '@/components/Sidebar'
import { ColorPalette as ColorPaletteType } from '@/types'
import { useState, useEffect } from 'react'

export default function Home() {
	const [palettes, setPalettes] = useState<ColorPaletteType[]>([])
	const [selectedTags, setSelectedTags] = useState<string[]>([])
	const [searchTerm, setSearchTerm] = useState<string>('')

	useEffect(() => {
		setPalettes(generateSamplePalettes())
	}, [])

	const handleFilterChange = (filter: string) => {
		setSearchTerm(filter)
	}

	const handleTagSelect = (tag: string) => {
		setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
	}

	const filteredPalettes = palettes.filter((palette) => {
		const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => palette.tags.includes(tag))
		const matchesSearch =
			searchTerm === '' ||
			palette.colors.some((color) => color.toLowerCase().includes(searchTerm.toLowerCase())) ||
			palette.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
		return matchesTags && matchesSearch
	})

	return (
		<div className="flex min-h-screen bg-gray-50">
			<Sidebar onFilterChange={handleFilterChange} onTagSelect={handleTagSelect} selectedTags={selectedTags} />
			<main className="flex-1 ml-64">
				<div className="container mx-auto p-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
						{filteredPalettes.map((palette) => (
							<ColorPalette key={palette.id} palette={palette} />
						))}
					</div>
				</div>
			</main>
		</div>
	)
}
