'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { ColorPalette } from '../types'

interface ColorCardProps {
	palette: ColorPalette
	onLike: (id: string) => void
}

const hexToRgb = (hex: string) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	if (!result) return null
	return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
}

const ColorCard: React.FC<ColorCardProps> = ({ palette, onLike }) => {
	const [copiedFormat, setCopiedFormat] = useState<{ color: string; format: 'hex' | 'rgb' } | null>(null)

	const copyToClipboard = (color: string, format: 'hex' | 'rgb') => {
		const colorValue = format === 'hex' ? color : hexToRgb(color)
		navigator.clipboard.writeText(colorValue || '')
		setCopiedFormat({ color, format })
		setTimeout(() => setCopiedFormat(null), 2000)
	}

	const timeAgo = (date: Date) => {
		if (typeof window === 'undefined') return '' // Sunucu tarafında boş string döndür

		const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
		const intervals = {
			year: 31536000,
			month: 2592000,
			week: 604800,
			day: 86400,
			hour: 3600,
			minute: 60
		}

		for (const [unit, secondsInUnit] of Object.entries(intervals)) {
			const interval = Math.floor(seconds / secondsInUnit)
			if (interval >= 1) {
				return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`
			}
		}
		return 'just now'
	}

	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden">
			<div className="h-48 grid grid-rows-4">
				{palette.colors.map((color, index) => (
					<div
						key={index}
						className="w-full cursor-pointer relative group"
						style={{ backgroundColor: color }}
						onClick={() => copyToClipboard(color, 'hex')}
					>
						<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
							<div className="flex gap-2">
								<button
									onClick={(e) => {
										e.stopPropagation()
										copyToClipboard(color, 'hex')
									}}
									className="bg-white px-2 py-1 rounded text-sm font-medium hover:bg-gray-100"
								>
									{copiedFormat?.color === color && copiedFormat?.format === 'hex' ? 'Copied!' : color}
								</button>
								<button
									onClick={(e) => {
										e.stopPropagation()
										copyToClipboard(color, 'rgb')
									}}
									className="bg-white px-2 py-1 rounded text-sm font-medium hover:bg-gray-100"
								>
									{copiedFormat?.color === color && copiedFormat?.format === 'rgb' ? 'Copied!' : hexToRgb(color)}
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="p-4">
				<div className="flex items-center justify-between mb-2">
					<button
						onClick={() => onLike(palette.id)}
						className="flex items-center space-x-1 text-gray-600 hover:text-red-500"
					>
						<Heart className="h-4 w-4" />
						<span className="text-sm">{palette.likes}</span>
					</button>
					<span className="text-sm text-gray-500">{timeAgo(palette.createdAt)}</span>
				</div>
				<div className="flex flex-wrap gap-1">
					{palette.tags.map((tag) => (
						<span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}

export default ColorCard
