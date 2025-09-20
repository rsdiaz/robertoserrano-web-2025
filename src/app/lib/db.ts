import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/'
const client = new MongoClient(uri)
const dbName = 'blog'

let isConnected = false

export async function db() {
	if (!isConnected) {
		await client.connect()
		isConnected = true
	}
	return client.db(dbName)
}
