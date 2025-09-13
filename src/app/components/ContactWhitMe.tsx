import { Github, Linkedin, Twitter } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export default function ContactWithMe() {
	const socialLinks = [
		{
			icon: Github,
			name: 'GitHub',
			href: 'https://github.com/roberto-serrano',
			description: 'Código abierto y proyectos',
		},
		{
			icon: Linkedin,
			name: 'LinkedIn',
			href: 'https://linkedin.com/in/roberto-serrano',
			description: 'Perfil profesional y network',
		},
		{
			icon: Twitter,
			name: 'Twitter',
			href: 'https://twitter.com/roberto_dev',
			description: 'Pensamientos varios',
		},
	]
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-xl">Conecta conmigo</CardTitle>
				<CardDescription>Sígueme en redes sociales para más contenido y actualizaciones</CardDescription>
			</CardHeader>
			<CardContent className="space-y-3">
				{socialLinks.map((social, index) => (
					<a
						key={index}
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:shadow-glow transition-smooth group"
					>
						<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
							<social.icon className="h-5 w-5 text-primary group-hover:text-accent transition-smooth" />
						</div>
						<div className="flex-1">
							<div className="font-medium group-hover:text-accent transition-smooth">{social.name}</div>
							<p className="text-sm text-muted-foreground">{social.description}</p>
						</div>
					</a>
				))}
			</CardContent>
		</Card>
	)
}
