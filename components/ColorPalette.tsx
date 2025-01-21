import React from 'react'
import ColorCard from './ColorCard'

interface ColorPaletteProps {
	colors: string[]
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
			{colors.map((color, index) => (
				<ColorCard key={index} color={color} />
			))}
		</div>
	)
}

export default ColorPalette
