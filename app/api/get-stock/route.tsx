import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol");
  const pagesize = 20;

  try {
    // Fetch data from the SQL database using the provided symbol using tsvectors and tsquery
    // const result = await sql`
    //             SELECT * FROM stock_symbols WHERE to_tsvector('english', symbol) @@ to_tsquery('english', ${symbol});
    //         `;
    // return NextResponse.json({ result }, { status: 200 });
    // new way to query from another table
      const result = await sql`
                SELECT * FROM tv WHERE exchange LIKE ${symbol} OR symbol LIKE ${symbol} OR description LIKE ${symbol} LIMIT ${pagesize}"
            `;
      return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
