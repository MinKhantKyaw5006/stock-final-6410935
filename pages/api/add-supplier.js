import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { db } = await connectToDatabase();
    const collection = db.collection('supplier');
    const list = req.body;
    const result = await collection.insertOne(list);
    res.status(201).json({ message: 'Supplier list created successfully', data: result.ops[0] });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
