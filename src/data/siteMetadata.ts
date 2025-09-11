const siteMetadata = {
	title: 'Roberto Serrano Díaz-Grande | Desarrollador Full-Stack',
	description:
		'Bienvenido a mi sitio web personal donde comparto artículos sobre desarrollo web, programación y tecnología.',
	siteUrl: process.env.NODE_ENV === 'production' ? 'https://robertoserrano.pro' : 'http://localhost:3000',
	socialBanner: '/static/images/social-banner.png',
}

export default siteMetadata
