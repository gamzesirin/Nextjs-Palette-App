import { ColorPalette } from '@/types'

export const generateSamplePalettes = (): ColorPalette[] => {
	return [
		// Pastel Paletler
		{
			id: '1',
			colors: ['#FFB5C2', '#FFE2E2', '#F6DFEB', '#DCEDF9', '#E8F3D6'],
			likes: 12,
			tags: ['Pastel', 'Spring', 'Light'],
			createdAt: new Date('2024-03-15')
		},
		{
			id: '2',
			colors: ['#E0BBE4', '#957DAD', '#D291BC', '#FEC8D8', '#FFDFD3'],
			likes: 15,
			tags: ['Pastel', 'Vintage', 'Light'],
			createdAt: new Date('2024-03-14')
		},

		// Neon Paletler
		{
			id: '3',
			colors: ['#FF0099', '#00FF00', '#00FFFF', '#FF00FF', '#FE0000'],
			likes: 8,
			tags: ['Neon', 'Urban', 'Dark'],
			createdAt: new Date('2024-03-13')
		},
		{
			id: '4',
			colors: ['#39FF14', '#FF3131', '#FF1493', '#00FFFF', '#FF00FF'],
			likes: 20,
			tags: ['Neon', 'Urban', 'Dark'],
			createdAt: new Date('2024-03-12')
		},

		// Vintage Paletler
		{
			id: '5',
			colors: ['#DEB887', '#D2B48C', '#BC8F8F', '#F4A460', '#DAA520'],
			likes: 25,
			tags: ['Vintage', 'Warm', 'Fall'],
			createdAt: new Date('2024-03-11')
		},
		{
			id: '6',
			colors: ['#8B4513', '#A0522D', '#6B4423', '#8B7355', '#CD853F'],
			likes: 18,
			tags: ['Vintage', 'Retro', 'Fall'],
			createdAt: new Date('2024-03-10')
		},

		// Doğa Temalı
		{
			id: '7',
			colors: ['#228B22', '#32CD32', '#90EE90', '#98FB98', '#3CB371'],
			likes: 30,
			tags: ['Nature', 'Spring', 'Summer'],
			createdAt: new Date('2024-03-09')
		},
		{
			id: '8',
			colors: ['#87CEEB', '#00BFFF', '#1E90FF', '#4682B4', '#B0E0E6'],
			likes: 22,
			tags: ['Nature', 'Cold', 'Winter'],
			createdAt: new Date('2024-03-08')
		},

		// Minimal
		{
			id: '9',
			colors: ['#FFFFFF', '#F5F5F5', '#DCDCDC', '#D3D3D3', '#C0C0C0'],
			likes: 28,
			tags: ['Minimal', 'Light', 'Urban'],
			createdAt: new Date('2024-03-07')
		},
		{
			id: '10',
			colors: ['#000000', '#1A1A1A', '#333333', '#4D4D4D', '#666666'],
			likes: 15,
			tags: ['Minimal', 'Dark', 'Urban'],
			createdAt: new Date('2024-03-06')
		},

		// Gold Temalı
		{
			id: '11',
			colors: ['#FFD700', '#DAA520', '#B8860B', '#CD853F', '#D2691E'],
			likes: 35,
			tags: ['Gold', 'Warm', 'Luxury'],
			createdAt: new Date('2024-03-05')
		},

		// Mevsimsel - Yaz
		{
			id: '12',
			colors: ['#FF6B6B', '#4ECDC4', '#FFD93D', '#95E1D3', '#FF8B94'],
			likes: 42,
			tags: ['Summer', 'Warm', 'Light'],
			createdAt: new Date('2024-03-04')
		},

		// Mevsimsel - Kış
		{
			id: '13',
			colors: ['#A0B4C7', '#CBD5E1', '#E2E8F0', '#F1F5F9', '#94A3B8'],
			likes: 19,
			tags: ['Winter', 'Cold', 'Light'],
			createdAt: new Date('2024-03-03')
		},

		// Retro
		{
			id: '14',
			colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'],
			likes: 26,
			tags: ['Retro', 'Vintage', 'Warm'],
			createdAt: new Date('2024-03-02')
		}
	]
}
