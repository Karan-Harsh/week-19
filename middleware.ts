import { NextRequest, NextResponse } from "next/server";

let requestcount = 0;
export function middleware(req: NextRequest) {
  requestcount++;
  const res = NextResponse.next();
  console.log("count is = " + requestcount);
  return res;
}
