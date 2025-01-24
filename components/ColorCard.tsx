'use client'

import { useState } from 'react'

interface ColorCardProps {
	palette: {
		id: string
		colors: string[]
		tags: string[]
		likes: number
		createdAt: Date
	}
}

const ColorCard = ({ palette }: ColorCardProps) => {
	const [copiedColor, setCopiedColor] = useState<string | null>(null)

	const copyColorToClipboard = async (color: string) => {
		try {
			await navigator.clipboard.writeText(color)
			setCopiedColor(color)

			setTimeout(() => {
				setCopiedColor(null)
			}, 2000)
		} catch (err) {
			console.error('Failed to copy color:', err)
		}
	}

	return (
		<div className="group relative w-full">
			<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
				<div className="grid grid-cols-5 h-32 sm:h-44 rounded-t-xl overflow-hidden">
					{palette.colors.map((color, index) => (
						<div key={`${palette.id}-${index}`} className="relative group/color" style={{ backgroundColor: color }}>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/color:opacity-100 bg-black/20 transition-opacity">
								<button
									onClick={() => copyColorToClipboard(color)}
									className="w-full h-full flex items-center justify-center text-white font-medium"
								>
									<span className="px-2 py-1 bg-black/40 rounded-md text-xs sm:text-sm backdrop-blur-sm">{color}</span>
								</button>
							</div>
						</div>
					))}
				</div>

				<div className="p-3 sm:p-4">
					<div className="flex flex-wrap gap-1.5 sm:gap-2">
						{palette.tags.map((tag) => (
							<span key={`${palette.id}-${tag}`} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>

			<div
				className={`
				absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full 
				transition-all duration-200 
				bg-black text-white text-xs font-medium px-3 py-1.5 rounded-lg
				shadow-lg pointer-events-none whitespace-nowrap
				${copiedColor ? 'opacity-100' : 'opacity-0'}
			`}
			>
				<span className="flex items-center gap-1">
					<svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
					</svg>
					Copied!
				</span>
				<div
					className="absolute -top-1 left-1/2 transform -translate-x-1/2 
							  border-4 border-transparent border-b-black"
				></div>
			</div>
		</div>
	)
}

export default ColorCard
