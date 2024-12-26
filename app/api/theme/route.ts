import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma-client";

export async function GET() {
  const theme = await prisma.theme.findUnique({
    where: {id: 1}
  });

  return NextResponse.json(theme);
}

export async function PATCH(req: NextRequest) {
  const { mode } = await req.json();

  const updatedTheme = await prisma.theme.update({
    where: { id: 1 },
    data: { mode },
  });

  return NextResponse.json(updatedTheme)
}
