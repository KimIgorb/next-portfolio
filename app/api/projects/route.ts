import { NextResponse } from "next/server";
import { prisma } from "../../../prisma/prisma-client";

export async function GET() {
  const projects = await prisma.projects.findMany();

  return NextResponse.json(projects);
}
