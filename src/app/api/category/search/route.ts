import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId");
  const priceRange = searchParams.get("priceRange");
  const search = searchParams.get("keyword") || "";
  const higherPrice = priceRange?.split("-")?.[1];
  const lowerPrice = priceRange?.split("-")?.[0];
  const deliveryTime = searchParams.get("deliveryTime");
  const minimumDeliveryTime = deliveryTime?.split("-")?.[0];
  const maximumDeliveryTime = deliveryTime?.split("-")?.[1];

  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "2";

  const skip = (Number(page) - 1) * Number(limit);

  const categoryInfo = await prisma.category.findUnique({
    where: {
      id: categoryId as string,
    },
    include: {
      subCategories: true,
    },
  });

  let options = {
    skip,
    take: Number(limit),
  };

  const query = {
    where: {
      name: {
        contains: search as string,
      },
      categoryId: categoryId as string,
      price: {
        gte: lowerPrice ? lowerPrice : "0",
        lte: higherPrice ? higherPrice : "999999999",
      },
      deliveryTime: {
        gte: minimumDeliveryTime ? minimumDeliveryTime : "0",
        lte: maximumDeliveryTime ? maximumDeliveryTime : "999999999",
      },
    },
    ...options,
  };

  const products = await prisma.product.findMany(query);

  const totalCount = await prisma.product.count({ where: query.where });
  const hasNextPage = skip + Number(limit) < totalCount;
  const hasPrevPage = Number(page) > 1;

  return NextResponse.json({
    categoryInfo,
    products,
    pagination: {
      totalPages: Math.ceil(totalCount / Number(limit)),
      totalCount,
      hasNextPage,
      hasPrevPage,
    },
  });
}
