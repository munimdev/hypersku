import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
  "Women's Clothing",
  "Men's Clothing",
  "Pet Supplies",
  "Mother/Kids/Baby",
  "Toys Hobbies",
  "Fashion Jewelry",
  "Shoes",
  "Luggage Bags",
  "Furniture",
  "Lights Lighting",
];

export async function GET() {
  try {
    const categoryPromises = categories.map((category) => {
      return prisma.category.create({
        data: {
          name: category,
        },
      });
    });

    await Promise.all(categoryPromises);

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json({
        success: false,
        message: "Categories already exist",
      });
    }
    return NextResponse.json({
      message: error.message,
    });
  }
}
