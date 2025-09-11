import Link from 'next/link'
import { Button } from '@/app/components/ui/button'

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
			<h1 className="text-6xl font-bold text-primary mb-6">404</h1>
			<p className="text-xl text-muted-foreground mb-8">La página que buscas no existe o fue movida.</p>
			<Button asChild>
				<Link href="/">Volver al inicio</Link>
			</Button>
		</div>
	)
}
