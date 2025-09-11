import { Metadata } from 'next'
import BlogHeader from './components/BlogHeader'
import BlogPageContent from './components/BlogPageContent'
import { FeaturedPost } from './components/FeaturedPost'
import { generatedPageMetadata } from '../lib/seo'

export const metadata: Metadata = generatedPageMetadata({
	title: 'Blog',
})

export default function BlogPage() {
	return (
		<div className="min-h-screen pt-24 pb-16">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<BlogHeader />
				<FeaturedPost />
				<BlogPageContent />
			</div>
		</div>
	)
}
