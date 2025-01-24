export interface ColorPalette {
	id: string
	colors: string[]
	tags: string[]
	likes: number
	createdAt: Date
}

export interface Tag {
	name: string
	category: 'style' | 'season' | 'theme'
}
