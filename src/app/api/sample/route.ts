import { prisma } from "@/configs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json(
      {
        msg: "Database wrokign Securily",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ msg: "Failed" });
  }
}
