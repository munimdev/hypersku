import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "10";

  const skip = (Number(page) - 1) * Number(limit);
  const totalCount = await prisma.product.count();
  const hasNextPage = skip + Number(limit) < totalCount;
  const hasPrevPage = Number(page) > 1;

  let options = {
    skip,
    take: Number(limit),
  };

  const product = await prisma.product.findMany({
    ...options,
  });

  return NextResponse.json({
    product,
    limit: Number(limit),
    totalCount,
    hasNextPage,
    hasPrevPage,
  });
}
