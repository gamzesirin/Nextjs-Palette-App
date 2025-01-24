import { ColorPalette } from '@/types'

const generateColorFromSeed = (seed: number): string => {
	const r = (seed * 9301 + 49297) % 233280
	const color = Math.floor((r / 233280) * 16777215)
	return `#${color.toString(16).padStart(6, '0')}`
}

const seededRandom = (seed: number): number => {
	const x = Math.sin(seed++) * 10000
	return x - Math.floor(x)
}

const tagBasedPalettes: Record<string, string[]> = {
	Warm: ['#FF6B6B', '#FF8E72', '#FFA07A', '#FFB88C', '#FFCBA4'],
	Cool: ['#4A90E2', '#5CACEE', '#6EC6FF', '#87CEEB', '#B0E0E6'],
	Pastel: ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#FFB3F7'],
	Vibrant: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'],
	Dark: ['#2C3E50', '#34495E', '#4A4A4A', '#373737', '#1A1A1A'],
	Light: ['#FAFAFA', '#F8F9FA', '#F5F6F8', '#EDF2F7', '#E2E8F0'],
	Nature: ['#228B22', '#32CD32', '#90EE90', '#98FB98', '#3CB371'],
	Modern: ['#607D8B', '#78909C', '#90A4AE', '#B0BEC5', '#CFD8DC'],
	Vintage: ['#D4A76A', '#B7846A', '#A67B5B', '#8B6B4D', '#6F563F'],
	Minimal: ['#FFFFFF', '#E2E2E2', '#CCCCCC', '#B3B3B3', '#A6A6A6'],
	Neon: ['#FF1493', '#00FF00', '#FF4500', '#00FFFF', '#FF00FF'],
	Retro: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'],
	Autumn: ['#D4A373', '#A98467', '#967E76', '#8B7355', '#6B4423'],
	Spring: ['#98FB98', '#DDA0DD', '#FFB6C1', '#87CEEB', '#F0E68C'],
	Summer: ['#FF6B6B', '#4ECDC4', '#FFD93D', '#95E1D3', '#FF8B94'],
	Winter: ['#A0D2DB', '#B0A8B9', '#C4B2BC', '#DAD4EF', '#B8D0EB'],
	Gold: ['#FFD700', '#FDB931', '#F4AF37', '#DAA520', '#B8860B'],
	Fall: ['#BF4904', '#D76A03', '#F58216', '#F9A03F', '#FFB366'],
	Cold: ['#1B262C', '#0F4C75', '#3282B8', '#BBE1FA', '#E3F4FF'],
	Urban: ['#2B2D42', '#8D99AE', '#EDF2F4', '#EF233C', '#D90429'],
	Forest: ['#2D5A27', '#436B35', '#5A8A45', '#87BF60', '#A8D183'],
	Ocean: ['#023E8A', '#0077B6', '#0096C7', '#00B4D8', '#48CAE4'],
	Sunset: ['#FF7B00', '#FF8800', '#FF9500', '#FFA200', '#FFAA00'],
	Desert: ['#C2B280', '#D4C19C', '#E6D5B8', '#E1C699', '#C2955D'],
	Tropical: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF8B94', '#4FB99F'],
	Nordic: ['#F1F3F4', '#D7E1E9', '#B8C9D9', '#9BB1C7', '#7D98B3'],
	Candy: ['#FF85A1', '#FFA9A9', '#FFC3A0', '#FFE5D9', '#FFF0F0'],
	Space: ['#0B3D91', '#1E4D9E', '#2E5CA9', '#3E6AB3', '#4E78BC'],
	Royal: ['#4B0082', '#6A0DAD', '#8B008B', '#9932CC', '#BA55D3'],
	Earth: ['#5D4037', '#795548', '#8D6E63', '#A1887F', '#BCAAA4'],
	Jungle: ['#004B23', '#006400', '#007200', '#008000', '#38B000'],
	Coral: ['#FF6F61', '#FF8574', '#FF9B87', '#FFB199', '#FFC7AC'],
	Berry: ['#4A0404', '#720026', '#CE4257', '#FF7F51', '#FF9B85'],
	Olive: ['#4A5D23', '#708238', '#A9B18C', '#B7C68B', '#DDE5B6'],
	Slate: ['#2C3333', '#2E4F4F', '#0E8388', '#CBE4DE', '#F5F5F5'],
	Peach: ['#FFE5D9', '#FFD7BA', '#FFC89A', '#FFB97B', '#FFAA5C'],
	Azure: ['#EDF6F9', '#83C5BE', '#006D77', '#004C54', '#002B31'],
	Wine: ['#722F37', '#A63446', '#C74B50', '#D1495B', '#DE6B68'],
	Sage: ['#D1D9CE', '#B5C4B1', '#8CA889', '#6B8E5C', '#4F7942'],
	Storm: ['#2C3E50', '#34495E', '#415B76', '#4E6D8C', '#5B7FA3']
}

const tagCombinations: Record<string, string[]> = {
	'Warm-Vintage': ['#E9967A', '#DEB887', '#CD853F', '#D2691E', '#8B4513'],
	'Cool-Modern': ['#2C3E50', '#3498DB', '#2980B9', '#34495E', '#21618C'],
	'Pastel-Spring': ['#F8C3CD', '#E6B3C3', '#D4A5BD', '#C297B8', '#B089B2'],
	'Neon-Vibrant': ['#FF00FF', '#00FF00', '#FF0000', '#00FFFF', '#FFFF00'],
	'Dark-Modern': ['#1A1A1D', '#4E4E50', '#6F2232', '#950740', '#C3073F'],
	'Light-Minimal': ['#FAFAFA', '#E8E8E8', '#D4D4D4', '#BFBFBF', '#A8A8A8'],
	'Nature-Summer': ['#8FBC8F', '#98FB98', '#90EE90', '#9ACD32', '#7CBA3D'],
	'Retro-Vintage': ['#FF9E9E', '#FFB4B4', '#FFCBA4', '#FFE4B5', '#FFE5B4'],
	'Autumn-Warm': ['#8B4513', '#A0522D', '#B8860B', '#CD853F', '#DEB887'],
	'Winter-Cool': ['#87CEEB', '#B0C4DE', '#ADD8E6', '#B0E0E6', '#87CEFA']
}

const sampleTags = [...Object.keys(tagBasedPalettes), ...Object.keys(tagCombinations)]

const generateTagBasedPalette = (tag: string, seed: number): ColorPalette => {
	if (tagCombinations[tag]) {
		return {
			id: `${tag.toLowerCase()}-${seed}`,
			colors: tagCombinations[tag],
			tags: tag.split('-'),
			likes: Math.floor(seededRandom(seed) * 100),
			createdAt: new Date(seed)
		}
	}

	return {
		id: `${tag.toLowerCase()}-${seed}`,
		colors: tagBasedPalettes[tag] || [...Array(5)].map((_, i) => generateColorFromSeed(seed * 5 + i)),
		tags: [tag],
		likes: Math.floor(seededRandom(seed) * 100),
		createdAt: new Date(seed)
	}
}

const hslToHex = (h: number, s: number, l: number): string => {
	const hDecimal = l / 100
	const a = (s * Math.min(hDecimal, 1 - hDecimal)) / 100
	const f = (n: number) => {
		const k = (n + h / 30) % 12
		const color = hDecimal - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
		return Math.round(255 * color)
			.toString(16)
			.padStart(2, '0')
	}
	return `#${f(0)}${f(8)}${f(4)}`.toUpperCase()
}

const generateHarmonizedColors = (baseSeed: number): string[] => {
	const baseHue = seededRandom(baseSeed) * 360

	const harmonies = [
		() => [0, 30, 60, 90, 120],
		() => [0, 180, 180, 0, 180],
		() => [0, 120, 240, 120, 240],
		() => [0, 150, 210, 150, 210],
		() => [0, 90, 180, 270, 360],
		() => [0, 0, 0, 0, 0]
	]

	const harmonyIndex = Math.floor(seededRandom(baseSeed + 1) * harmonies.length)
	const harmony = harmonies[harmonyIndex]()

	return harmony.map((hueOffset, index) => {
		const hue = (baseHue + hueOffset) % 360
		const saturation =
			harmonyIndex === 5 ? 40 + seededRandom(baseSeed + index + 2) * 30 : 70 + seededRandom(baseSeed + index + 2) * 30
		const lightness =
			harmonyIndex === 5 ? 40 + seededRandom(baseSeed + index + 3) * 40 : 45 + seededRandom(baseSeed + index + 3) * 25

		return hslToHex(hue, saturation, lightness)
	})
}

export const generateRandomPalettes = (count: number = 8): ColorPalette[] => {
	const baseSeed = Date.now()

	return [...Array(count)].map((_, index) => {
		const paletteSeed = baseSeed + index * 1000

		return {
			id: `random-${paletteSeed}`,
			colors: generateHarmonizedColors(paletteSeed),
			tags: ['Random'],
			likes: Math.floor(seededRandom(paletteSeed) * 50),
			createdAt: new Date()
		}
	})
}

export const generateSamplePalettes = (count: number = 8): ColorPalette[] => {
	const baseSeed = 12345

	const initialPalettes = sampleTags.map((tag, index) => generateTagBasedPalette(tag, baseSeed + index))

	const remainingCount = count - initialPalettes.length
	const additionalPalettes =
		remainingCount > 0
			? [...Array(remainingCount)].map((_, index) => {
					const randomTag = sampleTags[Math.floor(seededRandom(index) * sampleTags.length)]
					return generateTagBasedPalette(randomTag, baseSeed + initialPalettes.length + index)
			  })
			: []

	return [...initialPalettes, ...additionalPalettes]
}
