import { Button } from '@/app/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'
import { ArrowRight, Code2, Zap, Users, BookOpen, ExternalLink } from 'lucide-react'
import HeroBg from './public/hero-bg.jpg'
import Link from 'next/link'
import { allProjects } from 'contentlayer/generated'
import { getLatestPosts } from '@/app/lib/blog-posts'

export default function Home() {
	const features = [
		{
			icon: Code2,
			title: 'Desarrollo Full-Stack',
			description: 'Experiencia completa en frontend y backend con tecnologías modernas',
		},
		{
			icon: Zap,
			title: 'Soluciones Eficientes',
			description: 'Código limpio, optimizado y escalable que resuelve problemas reales',
		},
		{
			icon: Users,
			title: 'Enfoque Colaborativo',
			description: 'Trabajo en equipo y comunicación efectiva para mejores resultados',
		},
	]

	const recentPosts = getLatestPosts(2)

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section
				className="relative min-h-screen flex items-center justify-center overflow-hidden"
				style={{
					backgroundImage: `url(${HeroBg.src})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
				}}
			>
				<div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

				<div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="max-w-4xl mx-auto space-y-8">
						<Badge variant="secondary" className="mb-4">
							👋 ¡Hola! Soy Roberto Serrano
						</Badge>

						<h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
							Construyo <span className="text-gradient">software útil</span> que resuelve problemas reales
						</h1>

						<p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Desarrollador de software con pasión por crear aplicaciones innovadoras, escalables y centradas en el
							usuario. Transformo ideas en soluciones digitales efectivas.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
							<Button size="lg" className="shadow-glow" asChild>
								<Link href="/projects">
									Ver mis proyectos
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<Link href="/contact">Trabajemos juntos</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Por qué elegir mi trabajo?</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Combino experiencia técnica con enfoque en resultados para entregar soluciones que realmente marcan la
							diferencia.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<Card key={index} className="text-center shadow-elegant hover:shadow-glow transition-smooth">
								<CardHeader>
									<div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
										<feature.icon className="h-6 w-6 text-primary" />
									</div>
									<CardTitle className="text-xl">{feature.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-base">{feature.description}</CardDescription>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Recent Projects */}
			<section className="py-24">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-end mb-16">
						<div>
							<h2 className="text-3xl sm:text-4xl font-bold mb-4">Proyectos destacados</h2>
							<p className="text-xl text-muted-foreground">Algunos de mis trabajos más recientes</p>
						</div>
						<Button variant="outline" asChild>
							<Link href="/projects">
								Ver todos
								<ExternalLink className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{allProjects.map((project, index) => (
							<Card key={index} className="overflow-hidden group hover:shadow-glow transition-smooth">
								<div className="aspect-video bg-muted overflow-hidden">
									{/* <Image 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  /> */}
								</div>
								<CardHeader>
									<CardTitle className="text-xl">{project.title}</CardTitle>
									<CardDescription>{project.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										{project?.tech?.map(tech => (
											<Badge key={tech} variant="secondary" className="text-xs">
												{tech}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Recent Blog Posts */}
			<section className="py-24 bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-end mb-16">
						<div>
							<h2 className="text-3xl sm:text-4xl font-bold mb-4">Últimas publicaciones</h2>
							<p className="text-xl text-muted-foreground">Pensamientos sobre desarrollo y tecnología</p>
						</div>
						<Button variant="outline" asChild>
							<Link href="/blog">
								Ver blog
								<BookOpen className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{recentPosts.map((post, index) => (
							<Card key={index} className="hover:shadow-glow transition-smooth">
								<CardHeader>
									<div className="flex justify-between items-start mb-2">
										<Badge variant="outline" className="text-xs">
											{post.readingTime.text} lectura
										</Badge>
										<span className="text-sm text-muted-foreground">
											{new Date(post.date).toLocaleDateString('es-ES', {
												year: 'numeric',
												month: 'long',
												day: 'numeric',
											})}
										</span>
									</div>
									<CardTitle className="text-xl hover:text-accent transition-smooth cursor-pointer">
										{post.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-base">{post.excerpt}</CardDescription>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
