'use client'

import ColorCard from '@/components/ColorCard'
import Sidebar from '@/components/Sidebar'
import { usePaletteStore } from '@/store/usePaletteStore'

export default function Home() {
	const {
		palettes,
		selectedTags,
		searchTerm,
		isRandomMode,
		setSearchTerm,
		setSelectedTags,
		generateRandomPalettes,
		resetFilters
	} = usePaletteStore()

	const handleFilterChange = (filter: string) => {
		if (isRandomMode) {
			resetFilters()
		}
		setSearchTerm(filter)
	}

	const handleTagSelect = (tag: string) => {
		if (isRandomMode) {
			resetFilters()
		}

		const newTags = selectedTags.includes(tag) ? selectedTags.filter((t: string) => t !== tag) : [...selectedTags, tag]

		setSelectedTags(newTags)
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
		<div className="flex min-h-screen bg-gray-100">
			<Sidebar
				onFilterChange={handleFilterChange}
				onTagSelect={handleTagSelect}
				onRandomClick={generateRandomPalettes}
				selectedTags={selectedTags}
				isRandomMode={isRandomMode}
			/>
			<main className="flex-1 p-4 lg:ml-64 lg:p-12">
				<div className="max-w-8xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-10">
						{filteredPalettes.map((palette) => (
							<ColorCard key={palette.id} palette={palette} />
						))}
					</div>
				</div>
			</main>
		</div>
	)
}
