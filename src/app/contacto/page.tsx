import ContactWithMe from '../components/ContactWhitMe'
import ContactInfo from './components/ContactInfo'
import CollaborationTypes from './components/CollaborationTypes'
import ContactForm from './components/ContactForm'

const Contact = () => {
	return (
		<div className="min-h-screen pt-34 pb-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl sm:text-5xl font-bold mb-6">
						Hablemos de tu <span className="text-gradient">próximo proyecto</span>
					</h1>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						¿Tienes una idea innovadora? ¿Necesitas ayuda con un proyecto existente? Estoy aquí para convertir tus ideas
						en soluciones digitales exitosas.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Contact Form */}
					<div className="lg:col-span-2">
						<ContactForm />
					</div>
					<div className="space-y-8">
						<ContactInfo />
						<ContactWithMe />
						<CollaborationTypes />
					</div>
				</div>

				{/* FAQ Section */}
				{/* <section className="mt-20 pt-12 border-t border-border">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Preguntas frecuentes</h2>
						<p className="text-xl text-muted-foreground">Respuestas a las dudas más comunes sobre mis servicios</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<Card className="shadow-elegant">
							<CardHeader>
								<CardTitle className="text-lg">¿Cuánto tiempo toma un proyecto?</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base">
									Depende de la complejidad, pero proyectos típicos van de 2-8 semanas. Te proporciono estimaciones
									detalladas después de la consulta inicial.
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="shadow-elegant">
							<CardHeader>
								<CardTitle className="text-lg">¿Trabajas con startups?</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base">
									¡Absolutamente! Me encanta trabajar con startups y ayudar a convertir ideas innovadoras en productos
									exitosos. Ofrezco tarifas especiales.
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="shadow-elegant">
							<CardHeader>
								<CardTitle className="text-lg">¿Ofreces soporte post-desarrollo?</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base">
									Sí, incluyo 30 días de soporte gratuito. También ofrezco planes de mantenimiento mensual para
									actualizaciones y mejoras continuas.
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="shadow-elegant">
							<CardHeader>
								<CardTitle className="text-lg">¿Puedes trabajar con mi equipo?</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base">
									Por supuesto. Tengo experiencia colaborando con equipos de diferentes tamaños, desde startups hasta
									empresas enterprise.
								</CardDescription>
							</CardContent>
						</Card>
					</div>
				</section> */}
			</div>
		</div>
	)
}

export default Contact
