import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Calendar, Coffee, MessageCircle } from 'lucide-react'

const collaborationTypes = [
	{
		icon: Coffee,
		title: 'Consultoría',
		description: 'Asesoramiento técnico y revisión de arquitectura para tu proyecto.',
	},
	{
		icon: MessageCircle,
		title: 'Desarrollo',
		description: 'Desarrollo full-stack de aplicaciones web y móviles desde cero.',
	},
	{
		icon: Calendar,
		title: 'Mentoría',
		description: 'Sesiones de mentoría para desarrolladores junior y mid-level.',
	},
]

export default function CollaborationTypes() {
	return (
		<Card className="shadow-elegant">
			<CardHeader>
				<CardTitle className="text-xl">Tipos de colaboración</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{collaborationTypes.map((type, index) => (
					<div key={index} className="flex items-start space-x-3">
						<div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
							<type.icon className="h-4 w-4 text-accent" />
						</div>
						<div className="flex-1">
							<div className="font-medium text-sm">{type.title}</div>
							<p className="text-sm text-muted-foreground">{type.description}</p>
						</div>
					</div>
				))}
			</CardContent>
		</Card>
	)
}
