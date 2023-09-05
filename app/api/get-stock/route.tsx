import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol");
  const q = `%${symbol}%`;
  try {
    // Fetch data from the SQL database using the provided symbol using tsvectors and tsquery
    // const result = await sql`
    //             SELECT * FROM stock_symbols WHERE to_tsvector('english', symbol) @@ to_tsquery('english', ${symbol});
    //         `;
    // return NextResponse.json({ result }, { status: 200 });
    // new way to query from another table
      const result = await sql`
      SELECT * FROM tv
      WHERE exchange ILIKE ${q}
         OR symbol ILIKE ${q}
         OR description ILIKE ${q}
      ORDER BY 
        CASE
          WHEN symbol ILIKE ${q} THEN 1
          ELSE 2
        END,
        id
      LIMIT 20`;
      return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
