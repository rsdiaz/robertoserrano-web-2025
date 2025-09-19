import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Clock, MapPin } from 'lucide-react'

const contactInfo = [
	/* 	{
		icon: Mail,
		label: 'Email',
		value: 'roberto@serrano.dev',
		href: 'mailto:roberto@serrano.dev',
		description: 'Para consultas profesionales y colaboraciones',
	}, */
	{
		icon: MapPin,
		label: 'Ubicación',
		value: 'Tarragona, España',
		href: null,
		description: 'Disponible para trabajo remoto y presencial',
	},
	{
		icon: Clock,
		label: 'Horario',
		value: 'Lun - Vie, 8:00 - 20:00 CET',
		href: null,
		description: 'Respondo mensajes dentro de 24 horas',
	},
]

export default function ContactInfo() {
	return (
		<Card className="shadow-elegant">
			<CardHeader>
				<CardTitle className="text-xl">Información de contacto</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{contactInfo.map((info, index) => (
					<div key={index} className="flex items-start space-x-3">
						<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
							<info.icon className="h-5 w-5 text-primary" />
						</div>
						<div className="flex-1">
							<div className="font-medium">{info.label}</div>
							{info.href ? (
								<a href={info.href} className="text-accent hover:underline transition-smooth">
									{info.value}
								</a>
							) : (
								<div className="text-foreground">{info.value}</div>
							)}
							<p className="text-sm text-muted-foreground">{info.description}</p>
						</div>
					</div>
				))}
			</CardContent>
		</Card>
	)
}
