'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/app/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet'
import { Menu, Moon, Sun, Code2 } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()
	const pathname = usePathname()
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		setMounted(true)
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navigation = [
		{ name: 'Inicio', href: '/' },
		{ name: 'Sobre mí', href: '/sobre-mi' },
		{ name: 'Proyectos', href: '/proyectos' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Contacto', href: '/contacto' },
	]

	const isActive = (href: string) => {
		if (href === '/' && pathname === '/') return true
		if (href !== '/' && pathname.startsWith(href)) return true
		return false
	}

	if (!mounted) return null

	return (
		<header
			className={`fixed top-0 w-full z-50 transition-smooth ${isScrolled ? 'glass shadow-elegant' : 'bg-transparent'}`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-smooth">
						<Code2 className="h-8 w-8 text-primary" />
						<span className="text-xl font-bold text-gradient">Roberto Serrano</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						{navigation.map(item => (
							<Link
								key={item.name}
								href={item.href}
								className={`text-sm font-medium transition-smooth hover:text-accent ${
									isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
								}`}
							>
								{item.name}
							</Link>
						))}
					</nav>

					<div className="flex items-center space-x-4">
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							className="w-9 h-9 p-0"
						>
							{theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
						</Button>

						{/* Mobile Menu */}
						<Sheet>
							<SheetTrigger asChild className="md:hidden">
								<Button variant="ghost" size="sm" className="w-9 h-9 p-0">
									<Menu className="h-4 w-4" />
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-80">
								<div className="flex flex-col space-y-4 mt-8">
									{navigation.map(item => (
										<Link
											key={item.name}
											href={item.href}
											className={`text-lg font-medium transition-smooth hover:text-accent ${
												isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
											}`}
										>
											{item.name}
										</Link>
									))}
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
