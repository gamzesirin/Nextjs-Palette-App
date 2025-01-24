'use client'

import { useState } from 'react'

interface SidebarProps {
	onFilterChange: (filter: string) => void
	onTagSelect: (tag: string) => void
	onRandomClick: () => void
	selectedTags: string[]
	isRandomMode: boolean
}

const Sidebar = ({ onFilterChange, onTagSelect, onRandomClick, selectedTags, isRandomMode }: SidebarProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const tags = [
		'Warm',
		'Cool',
		'Pastel',
		'Vibrant',
		'Dark',
		'Light',
		'Nature',
		'Modern',
		'Vintage',
		'Minimal',
		'Neon',
		'Retro',
		'Autumn',
		'Spring',
		'Summer',
		'Winter',
		'Gold',
		'Fall',
		'Cold',
		'Urban',
		'Forest',
		'Ocean',
		'Sunset',
		'Desert',
		'Tropical',
		'Nordic',
		'Candy',
		'Space',
		'Royal',
		'Earth',
		'Jungle',
		'Coral',
		'Berry',
		'Olive',
		'Slate',
		'Peach',
		'Azure',
		'Wine',
		'Sage',
		'Storm'
	]

	return (
		<>
			{!isOpen && (
				<button
					onClick={() => setIsOpen(true)}
					className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md"
				>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			)}

			{isOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsOpen(false)} />}

			<aside
				className={`
				fixed top-0 left-0 h-screen bg-white shadow-sm z-40
				transition-all duration-300 ease-in-out
				${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0'}
				lg:w-64 lg:translate-x-0
			`}
			>
				<div className="h-full overflow-y-auto thin-scrollbar">
					<div className="p-6 space-y-8">
						<div className="text-2xl font-semibold text-gray-800 flex items-center justify-between">
							Palette App
							{isOpen && (
								<button onClick={() => setIsOpen(false)} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							)}
						</div>

						<div className="space-y-2">
							<input
								type="text"
								placeholder="Search colors or tags..."
								onChange={(e) => onFilterChange(e.target.value)}
								className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
							/>
						</div>

						<button
							onClick={onRandomClick}
							className={`w-full px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
								isRandomMode
									? 'bg-blue-500 text-white hover:bg-blue-600'
									: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
							}`}
						>
							Random Palettes
						</button>

						<div className="space-y-2">
							<h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Tags</h3>
							<div className="flex flex-wrap gap-2">
								{tags.map((tag) => (
									<button
										key={tag}
										onClick={() => onTagSelect(tag)}
										className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
											selectedTags.includes(tag)
												? 'bg-gray-800 text-white'
												: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
										}`}
									>
										{tag}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</aside>

			<style jsx global>{`
				.thin-scrollbar::-webkit-scrollbar {
					width: 2px;
				}

				.thin-scrollbar::-webkit-scrollbar-track {
					background: transparent;
				}

				.thin-scrollbar::-webkit-scrollbar-thumb {
					background: #e2e8f0;
					border-radius: 20px;
				}

				.thin-scrollbar::-webkit-scrollbar-thumb:hover {
					background: #cbd5e1;
				}

				.thin-scrollbar {
					scrollbar-width: thin;
					scrollbar-color: #e2e8f0 transparent;
				}

				.thin-scrollbar:hover {
					scrollbar-color: #cbd5e1 transparent;
				}
			`}</style>
		</>
	)
}

export default Sidebar
