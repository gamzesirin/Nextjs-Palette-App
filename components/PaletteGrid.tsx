import { ColorPalette } from '@/types'
import ColorCard from './ColorCard'

interface PaletteGridProps {
	palettes: ColorPalette[]
}

export const PaletteGrid = ({ palettes }: PaletteGridProps) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
			{palettes.map((palette) => (
				<ColorCard key={palette.id} palette={palette} />
			))}
		</div>
	)
}
