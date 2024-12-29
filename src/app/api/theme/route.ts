import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET() {
  try {
    const theme = await prisma.theme.findFirst();

    if (!theme) {
      return NextResponse.json({ error: "Theme not found" }, { status: 404 });
    }

    return NextResponse.json(theme);
  } catch (error) {
    console.error("Error fetching theme:", error);
    return NextResponse.json({ error: "Failed to fetch theme" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { mode } = await req.json();

    const updatedTheme = await prisma.theme.update({
      where: { id: 1 },
      data: { mode },
    });

    return NextResponse.json(updatedTheme);
  } catch (error) {
    console.error("Error updating theme:", error);
    return NextResponse.json({ error: "Failed to update theme" }, { status: 500 });
  }
}
