'use client'

import ColorCard from './ColorCard'
import { ColorPalette as ColorPaletteType } from '@/types'

interface ColorPaletteProps {
	palette: ColorPaletteType
}

const ColorPalette = ({ palette }: ColorPaletteProps) => {
	return <ColorCard palette={palette} />
}

export default ColorPalette
