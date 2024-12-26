import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

interface Context {
  params: { id: string };
}

export async function GET(request: Request, context: Context) {
  const { id } = context.params;

  const project = await prisma.projects.findUnique({
    where: { id: parseInt(id) },
  });

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
