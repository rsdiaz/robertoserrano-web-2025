import '@/app/css/prims.css'
import { Badge } from '@/app/components/ui/badge'
import { Button } from '@/app/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Separator } from '@/app/components/ui/separator'
import { allBlogPosts } from 'contentlayer/generated'
import { Bookmark, Calendar, Clock, Eye, Heart, MessageCircle, Share2, Tag, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BackNavigation from './components/BackNavigation'

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await props.params
	const post = allBlogPosts.find(p => p.slug === slug)

	if (!post) {
		return {
			title: 'Artículo no encontrado - Roberto Serrano Díaz-Grande',
		}
	}

	return {
		title: `${post.title} | `,
		description: post.excerpt,
		openGraph: {
			title: post.title,
			description: post.excerpt,
			images: [post.image?.url ?? ''],
		},
	}
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
	const { slug } = await props.params
	const post = allBlogPosts.find(p => p.slug === slug)

	if (!post) {
		return notFound()
	}

	return (
		<div className="min-h-screen pt-24 pb-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Back Navigation */}
				<BackNavigation />

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
					{/* Main Content */}
					<article className="lg:col-span-3">
						{/* Hero Image */}
						<div className="aspect-video mb-8 rounded-lg overflow-hidden shadow-elegant">
							{post?.image?.url && (
								<Image
									src={post.image?.url}
									alt={post.image?.alt}
									width={1000}
									height={1000}
									className="w-full h-full object-cover"
									priority={true}
								/>
							)}
						</div>
						{/* Article Header */}
						<header className="mb-8">
							<div className="flex flex-wrap items-center gap-4 mb-4">
								<Badge variant="default" className="capitalize">
									{post?.category}
								</Badge>
								<div className="flex items-center text-sm text-muted-foreground space-x-4">
									<span className="flex items-center">
										<Calendar className="h-4 w-4 mr-1" />
										{post?.date
											? new Date(post.date).toLocaleDateString('es-ES', {
													year: 'numeric',
													month: 'short',
													day: 'numeric',
												})
											: ''}
									</span>
									<span className="flex items-center">
										<Clock className="h-4 w-4 mr-1" />
										{post?.readingTime.text}
									</span>
									<span className="flex items-center">
										<Eye className="h-4 w-4 mr-1" />
										{/* {post.views.toLocaleString()} views */}
									</span>
								</div>
							</div>

							<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">{post?.title}</h1>

							<p className="text-xl text-muted-foreground leading-relaxed mb-6">{post?.excerpt}</p>

							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-3">
									<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
										<User className="h-5 w-5 text-primary" />
									</div>
									<div>
										<p className="font-medium">{post?.author}</p>
										<p className="text-sm text-muted-foreground">Ingeniero de Software</p>
									</div>
								</div>

								<div className="flex items-center space-x-2">
									<Button variant="outline" size="sm">
										<Heart className="h-4 w-4 mr-2" />
										Me gusta
									</Button>
									<Button variant="outline" size="sm">
										<Bookmark className="h-4 w-4 mr-2" />
										Guardar
									</Button>
									<Button variant="outline" size="sm">
										<Share2 className="h-4 w-4 mr-2" />
										Compartir
									</Button>
								</div>
							</div>
						</header>
						<Separator className="mb-8" />
						{/* Article Content */}
						<div className="prose prose-lg max-w-none dark:prose-invert">
							<MDXLayoutRenderer code={post?.body.code ?? ''} />
						</div>

						{/* Tags */}
						<div className="mt-12 pt-8 border-t border-border">
							<h3 className="text-lg font-semibold mb-4">Etiquetas</h3>
							<div className="flex flex-wrap gap-2">
								{post?.tags?.map(tag => (
									<Badge key={tag} variant="secondary" className="text-sm">
										<Tag className="h-3 w-3 mr-1" />
										{tag}
									</Badge>
								))}
							</div>
						</div>

						<Card className="mt-12 shadow-elegant">
							<CardContent className="pt-6">
								<div className="flex items-start space-x-4">
									<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
										<User className="h-8 w-8 text-primary" />
									</div>
									<div className="flex-1">
										<h4 className="text-xl font-bold mb-2">{post?.author}</h4>
										<p className="text-muted-foreground mb-4">
											Ingeniero de Software especializado en crear aplicaciones útiles que resuelven problemas reales.
											Con más de 6 años de experiencia en desarrollo full-stack y tecnologías modernas.
										</p>
										<Button variant="outline" size="sm" asChild>
											<Link href="/about">Ver perfil completo</Link>
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</article>

					{/* Sidebar */}
					<aside className="lg:col-span-1">
						<div className="sticky top-32 space-y-8">
							{/* Table of Contents */}
							<Card className="shadow-elegant">
								<CardHeader>
									<CardTitle className="text-lg">Contenido</CardTitle>
								</CardHeader>
								<CardContent>
									<nav className="space-y-2 text-sm">
										<a href="#introduccion" className="block text-muted-foreground hover:text-accent transition-smooth">
											Introducción
										</a>
										<a href="#tecnicas" className="block text-muted-foreground hover:text-accent transition-smooth">
											Técnicas de optimización
										</a>
										<a href="#metricas" className="block text-muted-foreground hover:text-accent transition-smooth">
											Métricas importantes
										</a>
										<a href="#herramientas" className="block text-muted-foreground hover:text-accent transition-smooth">
											Herramientas
										</a>
										<a href="#conclusion" className="block text-muted-foreground hover:text-accent transition-smooth">
											Conclusión
										</a>
									</nav>
								</CardContent>
							</Card>

							{/* Related Posts */}
							{/* {relatedPosts.length > 0 && (
								<Card className="shadow-elegant">
									<CardHeader>
										<CardTitle className="text-lg">Artículos relacionados</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4">
										{relatedPosts.map(relatedPost => (
											<div key={relatedPost.id} className="group">
												<Link
													to={`/blog/${relatedPost.slug}`}
													className="block hover:bg-muted/50 p-3 rounded-lg transition-smooth"
												>
													<h4 className="font-medium text-sm group-hover:text-accent transition-smooth line-clamp-2 mb-2">
														{relatedPost.title}
													</h4>
													<div className="flex items-center text-xs text-muted-foreground">
														<Clock className="h-3 w-3 mr-1" />
														{relatedPost.readTime}
													</div>
												</Link>
											</div>
										))}
									</CardContent>
								</Card>
							)} */}

							{/* Newsletter */}
							<Card className="shadow-elegant">
								<CardHeader>
									<CardTitle className="text-lg">Newsletter</CardTitle>
									<CardDescription>Recibe los últimos artículos en tu inbox</CardDescription>
								</CardHeader>
								<CardContent>
									<Button className="w-full" size="sm">
										Suscribirse
									</Button>
								</CardContent>
							</Card>
						</div>
					</aside>
				</div>
				{/* Comments Section */}
				<section className="mt-16 pt-8 border-t border-border">
					<div className="max-w-4xl">
						<h3 className="text-2xl font-bold mb-8 flex items-center">
							<MessageCircle className="h-6 w-6 mr-2" />
							Comentarios
						</h3>

						<Card className="shadow-elegant">
							<CardContent className="pt-6">
								<div className="text-center py-12">
									<MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
									<p className="text-muted-foreground mb-4">
										¿Qué te pareció este artículo? ¡Me encantaría conocer tu opinión!
									</p>
									<Button variant="outline" asChild>
										<Link href="/contact">Enviar comentario</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>
			</div>
		</div>
	)
}
