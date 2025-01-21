'use client'

import { Clock, Heart, Shuffle, ShoppingBasketIcon as Collection, Search } from 'lucide-react'
import { useState } from 'react'

const categories = {
	style: ['Pastel', 'Vintage', 'Retro', 'Neon', 'Gold', 'Light', 'Dark'],
	season: ['Summer', 'Fall', 'Winter', 'Spring'],
	theme: ['Warm', 'Cold']
}

interface SidebarProps {
	onFilterChange: (filter: string) => void
	onTagSelect: (tag: string) => void
	selectedTags: string[]
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange, onTagSelect, selectedTags }) => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className="w-64 h-screen bg-white border-r border-gray-200 p-4 fixed left-0 top-0">
			<div className="mb-6">
				<div className="relative">
					<input
						type="text"
						placeholder="Search tags..."
						className="w-full px-4 py-2 border rounded-lg pr-10"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
				</div>
			</div>

			<nav className="space-y-6">
				<div className="space-y-2">
					<button
						onClick={() => onFilterChange('new')}
						className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
					>
						<Clock className="h-5 w-5" />
						<span>New</span>
					</button>
					<button
						onClick={() => onFilterChange('popular')}
						className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
					>
						<Heart className="h-5 w-5" />
						<span>Popular</span>
					</button>
					<button
						onClick={() => onFilterChange('random')}
						className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
					>
						<Shuffle className="h-5 w-5" />
						<span>Random</span>
					</button>
					<button
						onClick={() => onFilterChange('collection')}
						className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
					>
						<Collection className="h-5 w-5" />
						<span>Collection</span>
					</button>
				</div>

				{Object.entries(categories).map(([category, tags]) => (
					<div key={category} className="space-y-2">
						<h3 className="text-sm font-semibold text-gray-500 uppercase">{category}</h3>
						<div className="space-y-1">
							{tags.map((tag) => (
								<button
									key={tag}
									onClick={() => onTagSelect(tag)}
									className={`w-full text-left px-4 py-2 text-sm rounded-lg ${
										selectedTags.includes(tag) ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
									}`}
								>
									{tag}
								</button>
							))}
						</div>
					</div>
				))}
			</nav>
		</div>
	)
}

export default Sidebar
