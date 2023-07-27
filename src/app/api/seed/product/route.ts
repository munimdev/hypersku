import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    name: "Women Trouser",
    description: "A silky women trouser",
    price: 13.23,
    categoryName: "Women's Clothing",
    rating: 4.5,
  },
  {
    name: "Women Jacket",
    description: "A silky women jacket",
    price: 20.56,
    categoryName: "Women's Clothing",
    rating: 3,
  },
  {
    name: "Women Blouse",
    description: "A silky women blouse",
    price: 15.23,
    categoryName: "Women's Clothing",
    rating: 4.5,
  },
  {
    name: "Men Jacket",
    description: "A sport jacket for men",
    price: 25.23,
    categoryName: "Men's Clothing",
    rating: 4.5,
  },
  {
    name: "Men Trouser",
    description: "A sport trouser for men",
    price: 18.23,
    categoryName: "Men's Clothing",
    rating: 5,
  },
  {
    name: "Wooden Sofa",
    description: "Sofa made from acacia wood",
    price: 150.23,
    categoryName: "Furniture",
    rating: 3,
  },
];

export async function GET() {
  try {
    for (const product of products) {
      await prisma.product.create({
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          rating: product.rating,
          category: {
            connect: {
              name: product.categoryName,
            },
          },
        },
      });
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json({
        success: false,
        message: "Products already exists",
      });
    }
    return NextResponse.json({
      message: error.message,
    });
  }
}
