import { useMemo } from 'react'
import { ColorPalette } from '@/types'

export const usePaletteFilters = (
	palettes: ColorPalette[],
	selectedTags: string[],
	searchTerm: string,
	isRandomMode: boolean
) => {
	return useMemo(() => {
		if (isRandomMode) return palettes

		return palettes.filter((palette) => {
			const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => palette.tags.includes(tag))

			const matchesSearch =
				searchTerm === '' ||
				palette.colors.some((color) => color.toLowerCase().includes(searchTerm.toLowerCase())) ||
				palette.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

			return matchesTags && matchesSearch
		})
	}, [palettes, selectedTags, searchTerm, isRandomMode])
}
