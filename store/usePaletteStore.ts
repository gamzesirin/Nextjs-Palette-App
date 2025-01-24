import { create } from 'zustand'
import { ColorPalette } from '@/types'
import { generateRandomPalettes, generateSamplePalettes } from '@/utils/colorGenerator'

interface PaletteStore {
	palettes: ColorPalette[]
	selectedTags: string[]
	searchTerm: string
	isRandomMode: boolean
	randomSeed: number
	setPalettes: (palettes: ColorPalette[]) => void
	setSelectedTags: (tags: string[]) => void
	setSearchTerm: (term: string) => void
	setRandomMode: (isRandom: boolean) => void
	generateRandomPalettes: () => void
	resetFilters: () => void
}

export const usePaletteStore = create<PaletteStore>((set) => ({
	palettes: generateSamplePalettes(),
	selectedTags: [],
	searchTerm: '',
	isRandomMode: false,
	randomSeed: Date.now(),
	setPalettes: (palettes) => set({ palettes }),
	setSelectedTags: (tags) => set({ selectedTags: tags }),
	setSearchTerm: (term) => set({ searchTerm: term }),
	setRandomMode: (isRandom) => set({ isRandomMode: isRandom }),
	generateRandomPalettes: () => {
		set((state) => ({
			palettes: generateRandomPalettes(8),
			isRandomMode: true,
			selectedTags: [],
			searchTerm: '',
			randomSeed: state.randomSeed + 1
		}))
	},
	resetFilters: () => {
		set({
			selectedTags: [],
			searchTerm: '',
			isRandomMode: false,
			palettes: generateSamplePalettes()
		})
	}
}))
