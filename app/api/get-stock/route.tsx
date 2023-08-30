import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';

export async function getStock(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const { symbol } = req.query;

            // Check if symbol is an array and use the first element as the argument for the sql function
            const symbolValue = Array.isArray(symbol) ? symbol[0] : symbol;

            // Fetch data from the SQL database using the provided symbol
            const result = await sql`
                SELECT * FROM stock_symbols WHERE symbol ILIKE ${symbolValue}
            `;

            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ error: 'An error occurred while fetching data.' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}

// Export the named function for the GET method
export default getStock;

