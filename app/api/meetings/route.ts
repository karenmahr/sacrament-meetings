import { NextResponse } from "next/server";
import { getMeetings } from "@/lib/meetings-db";

export async function GET() {
  const meetings = getMeetings();
  return NextResponse.json(meetings);
}