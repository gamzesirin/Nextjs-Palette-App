'use client'

import { useState } from 'react'

interface ColorCardProps {
	palette: {
		id: string
		colors: string[]
		tags: string[]
	}
}

const ColorCard = ({ palette }: ColorCardProps) => {
	const [copiedColor, setCopiedColor] = useState<string | null>(null)

	const hexToRgb = (hex: string): string => {
		hex = hex.replace('#', '')
		const r = parseInt(hex.substring(0, 2), 16)
		const g = parseInt(hex.substring(2, 4), 16)
		const b = parseInt(hex.substring(4, 6), 16)
		return `rgb(${r}, ${g}, ${b})`
	}

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
		<div className="group relative">
			{/* Ana Kart */}
			<div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
				{/* Renk Paleti */}
				<div className="grid grid-cols-5 h-40">
					{palette.colors.map((color, index) => (
						<div
							key={index}
							className="relative group/color cursor-pointer transition-transform hover:scale-105"
							style={{ backgroundColor: color }}
						>
							{/* Renk Bilgisi Overlay */}
							<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/color:opacity-100 bg-black/40 backdrop-blur-sm transition-all duration-200">
								{/* HEX */}
								<button
									onClick={() => copyColorToClipboard(color)}
									className="w-full h-1/2 flex items-center justify-center text-white text-xs md:text-sm font-mono hover:bg-white/10 transition-colors px-2 py-1"
								>
									<span className="truncate">{color}</span>
								</button>
								{/* RGB */}
								<button
									onClick={() => copyColorToClipboard(hexToRgb(color))}
									className="w-full h-1/2 flex items-center justify-center text-white text-xs md:text-sm font-mono hover:bg-white/10 transition-colors px-2 py-1 border-t border-white/20"
								>
									<span className="truncate">{hexToRgb(color)}</span>
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Etiketler */}
				<div className="p-4">
					<div className="flex flex-wrap gap-2">
						{palette.tags.map((tag, index) => (
							<span
								key={index}
								className="px-3 py-1 text-xs font-medium rounded-full 
									 bg-gradient-to-r from-gray-50 to-gray-100 
									 text-gray-600 hover:from-gray-100 hover:to-gray-200 
									 transition-all duration-200 
									 border border-gray-200/50 
									 shadow-sm hover:shadow"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>

			{/* Alt Tooltip */}
			<div
				className={`
				absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full 
				transition-all duration-200 
				bg-black text-white text-xs font-medium px-3 py-1.5 rounded-lg
				shadow-lg pointer-events-none whitespace-nowrap
				${copiedColor ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
			`}
			>
				{copiedColor ? (
					<span className="flex items-center gap-1">
						<svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
						</svg>
						Color copied to clipboard!
					</span>
				) : (
					'Click to copy color code'
				)}
				<div
					className="absolute -top-1 left-1/2 transform -translate-x-1/2 
							  border-4 border-transparent border-b-black"
				></div>
			</div>
		</div>
	)
}

export default ColorCard
