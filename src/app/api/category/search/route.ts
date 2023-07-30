import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId");

  const categoryInfo = await prisma.category.findUnique({
    where: {
      id: categoryId as string,
    },
    include: {
      subCategories: true,
    },
  });

  const products = await prisma.product.findMany({
    where: {
      categoryId: categoryId as string,
    },
  });

  return NextResponse.json({
    categoryInfo,
    products,
  });
}
