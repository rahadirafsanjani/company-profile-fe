import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(res)
  if (req.method === 'GET') {
    const { name } = req.query;
    res.status(200).json({ message: 'This is a GET request', name: `this is your name ${name}` });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
