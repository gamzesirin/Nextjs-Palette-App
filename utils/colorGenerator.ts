import { ColorPalette } from '@/types'

// Sabit bir seed kullanarak rastgele değer üretme
const seededRandom = (seed: number) => {
	const x = Math.sin(seed++) * 10000
	return x - Math.floor(x)
}

// Rastgele HEX renk üretme
const generateRandomColor = (seed: number): string => {
	const randomValue = seededRandom(seed)
	return (
		'#' +
		Math.floor(randomValue * 16777215)
			.toString(16)
			.padStart(6, '0')
	)
}

// Rastgele palette üretme
export const generateRandomPalette = (index: number): ColorPalette => {
	const seed = Date.now() + index
	return {
		id: `random-${seed}`,
		colors: Array(5)
			.fill(null)
			.map((_, i) => generateRandomColor(seed + i)),
		tags: ['Random'],
		likes: Math.floor(seededRandom(seed) * 50),
		createdAt: new Date()
	}
}

// Birden fazla palette üretme
export const generateRandomPalettes = (count: number = 8): ColorPalette[] => {
	const baseSeed = Date.now()
	return Array(count)
		.fill(null)
		.map((_, index) => generateRandomPalette(baseSeed + index))
}
