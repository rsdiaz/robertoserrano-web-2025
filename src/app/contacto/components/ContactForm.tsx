'use client'

import { Button } from '@/app/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'
import { Textarea } from '@/app/components/ui/textarea'
import { useToast } from '@/app/hooks/use-toast'
import { Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactForm() {
	const { toast } = useToast()
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		// Simular envío de formulario
		await new Promise(resolve => setTimeout(resolve, 1000))

		toast({
			title: '¡Mensaje enviado!',
			description: 'Gracias por contactarme. Te responderé pronto.',
		})

		setFormData({ name: '', email: '', subject: '', message: '' })
		setIsSubmitting(false)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}
	return (
		<Card className="shadow-elegant">
			<CardHeader>
				<CardTitle className="text-2xl flex items-center">
					<Send className="h-6 w-6 mr-2 text-primary" />
					Envíame un mensaje
				</CardTitle>
				<CardDescription className="text-base">
					Cuéntame sobre tu proyecto, idea o consulta. Me pondré en contacto contigo pronto.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div className="flex flex-col space-y-2">
							<Label htmlFor="name">Nombre completo</Label>
							<Input
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="Tu nombre"
								required
							/>
						</div>
						<div className="flex flex-col space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="tu@email.com"
								required
							/>
						</div>
					</div>

					<div className="flex flex-col space-y-2">
						<Label htmlFor="subject">Asunto</Label>
						<Input
							id="subject"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
							placeholder="¿En qué puedo ayudarte?"
							required
						/>
					</div>

					<div className="flex flex-col space-y-2">
						<Label htmlFor="message">Mensaje</Label>
						<Textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Describe tu proyecto, idea o consulta con el mayor detalle posible..."
							rows={6}
							required
						/>
					</div>

					<Button type="submit" size="lg" className="w-full shadow-glow" disabled={isSubmitting}>
						{isSubmitting ? (
							'Enviando...'
						) : (
							<>
								<Send className="h-4 w-4 mr-2" />
								Enviar mensaje
							</>
						)}
					</Button>
				</form>
			</CardContent>
		</Card>
	)
}
