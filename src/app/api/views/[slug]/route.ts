import { NextResponse } from 'next/server'
import { db } from '@/app/lib/db' // tu cliente Supabase/Mongo/etc.

export async function GET(req: Request, { params }: { params: { slug: string } }) {
	try {
		const { slug } = await params
		const database = await db()

		const post = await database.collection('posts').find({ slug }).toArray()

		return NextResponse.json(post)
	} catch (error) {
		return NextResponse.json(error)
	}
}

export async function POST(req: Request, { params }: { params: { slug: string } }) {
	try {
		const { slug } = await params
		const database = await db()

		await database.collection('post').updateOne({ slug }, { $inc: { views: 1 } })

		return NextResponse.json({ ok: true })
	} catch (error) {
		return NextResponse.json(error)
	}
}
