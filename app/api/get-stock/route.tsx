import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol");

  try {
    // Fetch data from the SQL database using the provided symbol
    const result = await sql`
                SELECT * FROM stock_symbols WHERE to_tsvector('english', symbol) @@ to_tsquery('english', ${symbol});
            `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
