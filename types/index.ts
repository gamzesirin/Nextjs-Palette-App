export interface ColorPalette {
	id: string
	colors: string[]
	likes: number
	createdAt: Date
	tags: string[]
}

export interface Tag {
	name: string
	category: 'style' | 'season' | 'theme'
}
