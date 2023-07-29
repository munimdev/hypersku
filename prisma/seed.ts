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

async function main() {
  const categoryTransaction = [];
  for (const category of categories) {
    categoryTransaction.push(
      prisma.category.create({
        data: {
          name: category,
        },
      })
    );
  }
  await prisma.$transaction(categoryTransaction);

  const productTransaction = [];

  for (const product of products) {
    productTransaction.push(
      prisma.product.create({
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
      })
    );
  }

  await prisma.$transaction(productTransaction);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
