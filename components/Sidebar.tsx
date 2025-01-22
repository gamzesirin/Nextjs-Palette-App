'use client'

interface SidebarProps {
	onFilterChange: (filter: string) => void
	onTagSelect: (tag: string) => void
	selectedTags: string[]
}

const Sidebar = ({ onFilterChange, onTagSelect, selectedTags }: SidebarProps) => {
	return (
		<div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6 overflow-y-auto">
			{/* Arama */}
			<div className="mb-6">
				<input
					type="text"
					placeholder="Search tags..."
					className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
					onChange={(e) => onFilterChange(e.target.value)}
				/>
			</div>

			{/* Ana Menü */}
			<div className="space-y-4 mb-8">
				<button className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 w-full">
					<span className="w-5">🕒</span>
					<span>New</span>
				</button>
				<button className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 w-full">
					<span className="w-5">❤️</span>
					<span>Popular</span>
				</button>
				<button className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 w-full">
					<span className="w-5">🎲</span>
					<span>Random</span>
				</button>
				<button className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 w-full">
					<span className="w-5">📁</span>
					<span>Collection</span>
				</button>
			</div>

			{/* Stil Kategorisi */}
			<div className="mb-6">
				<h3 className="text-sm font-semibold text-gray-500 mb-3">STYLE</h3>
				<div className="space-y-2">
					{['Pastel', 'Vintage', 'Retro', 'Neon', 'Gold', 'Light', 'Dark'].map((tag) => (
						<button
							key={tag}
							onClick={() => onTagSelect(tag)}
							className={`block w-full text-left px-2 py-1 rounded ${
								selectedTags.includes(tag) ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
							}`}
						>
							{tag}
						</button>
					))}
				</div>
			</div>

			{/* Sezon Kategorisi */}
			<div className="mb-6">
				<h3 className="text-sm font-semibold text-gray-500 mb-3">SEASON</h3>
				<div className="space-y-2">
					{['Summer', 'Fall', 'Winter', 'Spring'].map((tag) => (
						<button
							key={tag}
							onClick={() => onTagSelect(tag)}
							className={`block w-full text-left px-2 py-1 rounded ${
								selectedTags.includes(tag) ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
							}`}
						>
							{tag}
						</button>
					))}
				</div>
			</div>

			{/* Tema Kategorisi */}
			<div className="mb-6">
				<h3 className="text-sm font-semibold text-gray-500 mb-3">THEME</h3>
				<div className="space-y-2">
					{['Warm', 'Cold', 'Nature', 'Urban', 'Minimal'].map((tag) => (
						<button
							key={tag}
							onClick={() => onTagSelect(tag)}
							className={`block w-full text-left px-2 py-1 rounded ${
								selectedTags.includes(tag) ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
							}`}
						>
							{tag}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default Sidebar
