import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, query: { params: { id: string } }) {
  const products = await prisma.product.findUniqueOrThrow({
    where: {
      id: query.params.id,
    },
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  return NextResponse.json({ products });
}
