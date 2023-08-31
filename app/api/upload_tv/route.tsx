import { sql as postgresSql } from "@vercel/postgres";
import { NextResponse as nextResponse } from "next/server";

// export async function GET(request: Request) {

//   const data = JSON.parse(jsonDataString);
//   try {

//     for (const item of data) {
//       await postgresSql`
//         INSERT INTO stock_symbols (exchange, symbol)
//         VALUES (${item.exchange}, ${item.symbol})
//       `;
//     }

//     return nextResponse.json({ data }, { status: 200 });
//   } catch (error) {
//     return nextResponse.json({ error }, { status: 500 });
//   }
// }
