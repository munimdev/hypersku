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
    name: "Women Dress",
    description: "A beautiful summer dress",
    price: 24.3,
    categoryName: "Women's Clothing",
    rating: 4.0,
  },
  {
    name: "Women Skirt",
    description: "A pencil skirt for work",
    price: 17.99,
    categoryName: "Women's Clothing",
    rating: 4.5,
  },
  {
    name: "Women Sweater",
    description: "A warm women's sweater for winter",
    price: 40.0,
    categoryName: "Women's Clothing",
    rating: 4.8,
  },
  {
    name: "Women Jeans",
    description: "A pair of high-waisted jeans for women",
    price: 45.0,
    categoryName: "Women's Clothing",
    rating: 4.6,
  },
  {
    name: "Women Swimwear",
    description: "A fashionable one-piece swimwear for women",
    price: 30.0,
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
    name: "Men T-Shirt",
    description: "A casual T-Shirt for men",
    price: 10.0,
    categoryName: "Men's Clothing",
    rating: 4.5,
  },
  {
    name: "Men Suit",
    description: "A formal suit for men",
    price: 120.5,
    categoryName: "Men's Clothing",
    rating: 4.7,
  },
  {
    name: "Men Sweater",
    description: "A warm men's sweater for winter",
    price: 45.0,
    categoryName: "Men's Clothing",
    rating: 4.6,
  },
  {
    name: "Men Jeans",
    description: "A pair of straight-leg jeans for men",
    price: 50.0,
    categoryName: "Men's Clothing",
    rating: 4.8,
  },
  {
    name: "Men Swimwear",
    description: "Stylish swim shorts for men",
    price: 25.0,
    categoryName: "Men's Clothing",
    rating: 4.4,
  },
  {
    name: "Cat Litter Box",
    description: "A covered cat litter box",
    price: 40.0,
    categoryName: "Pet Supplies",
    rating: 4.6,
  },
  {
    name: "Dog Leash",
    description: "A durable dog leash",
    price: 15.0,
    categoryName: "Pet Supplies",
    rating: 4.8,
  },
  {
    name: "Bird Cage",
    description: "A large cage for birds",
    price: 100.0,
    categoryName: "Pet Supplies",
    rating: 4.5,
  },
  {
    name: "Fish Tank",
    description: "A medium-sized fish tank",
    price: 70.0,
    categoryName: "Pet Supplies",
    rating: 4.6,
  },
  {
    name: "Pet Bed",
    description: "A soft and comfortable bed for pets",
    price: 35.0,
    categoryName: "Pet Supplies",
    rating: 4.8,
  },
  {
    name: "Pet Food",
    description: "Premium dry food for pets",
    price: 25.0,
    categoryName: "Pet Supplies",
    rating: 4.7,
  },
  {
    name: "Baby Stroller",
    description: "A comfortable baby stroller",
    price: 180.0,
    categoryName: "Mother/Kids/Baby",
    rating: 4.7,
  },
  {
    name: "Maternity Dress",
    description: "A comfortable maternity dress",
    price: 30.0,
    categoryName: "Mother/Kids/Baby",
    rating: 4.7,
  },
  {
    name: "Kids Bicycle",
    description: "A sturdy kids bicycle",
    price: 90.0,
    categoryName: "Mother/Kids/Baby",
    rating: 4.5,
  },
  {
    name: "Baby Monitor",
    description: "A reliable baby monitor with night vision",
    price: 120.0,
    categoryName: "Mother/Kids/Baby",
    rating: 4.9,
  },
  {
    name: "Nursing Pillow",
    description: "A supportive nursing pillow for mothers",
    price: 40.0,
    categoryName: "Mother/Kids/Baby",
    rating: 4.7,
  },
  {
    name: "Kids Toys",
    description: "A set of educational toys for kids",
    price: 25.0,
    categoryName: "Mother/Kids/Baby",
    rating: 4.8,
  },
  {
    name: "RC Car",
    description: "A remote control car for kids",
    price: 35.0,
    categoryName: "Toys Hobbies",
    rating: 4.6,
  },
  {
    name: "Doll House",
    description: "A detailed doll house",
    price: 70.0,
    categoryName: "Toys Hobbies",
    rating: 4.8,
  },
  {
    name: "Board Game",
    description: "A fun board game for the family",
    price: 20.0,
    categoryName: "Toys Hobbies",
    rating: 4.7,
  },
  {
    name: "Model Train Set",
    description: "A detailed model train set for hobbyists",
    price: 200.0,
    categoryName: "Toys Hobbies",
    rating: 4.9,
  },
  {
    name: "Puzzle",
    description: "A 1000-piece puzzle for kids and adults",
    price: 15.0,
    categoryName: "Toys Hobbies",
    rating: 4.6,
  },
  {
    name: "Craft Kit",
    description: "A DIY craft kit for kids",
    price: 20.0,
    categoryName: "Toys Hobbies",
    rating: 4.5,
  },
  {
    name: "Diamond Earrings",
    description: "Elegant diamond earrings",
    price: 300.0,
    categoryName: "Fashion Jewelry",
    rating: 4.9,
  },
  {
    name: "Gold Necklace",
    description: "A luxurious gold necklace",
    price: 500.0,
    categoryName: "Fashion Jewelry",
    rating: 4.8,
  },
  {
    name: "Silver Bracelet",
    description: "A delicate silver bracelet",
    price: 80.0,
    categoryName: "Fashion Jewelry",
    rating: 4.7,
  },
  {
    name: "Pearl Ring",
    description: "A beautiful pearl ring",
    price: 120.0,
    categoryName: "Fashion Jewelry",
    rating: 4.6,
  },
  {
    name: "Gemstone Pendant",
    description: "A pendant with a high-quality gemstone",
    price: 100.0,
    categoryName: "Fashion Jewelry",
    rating: 4.5,
  },
  {
    name: "Women's Sandals",
    description: "Comfortable sandals for women",
    price: 40.0,
    categoryName: "Shoes",
    rating: 4.5,
  },
  {
    name: "Men's Boots",
    description: "Sturdy boots for men",
    price: 80.0,
    categoryName: "Shoes",
    rating: 4.6,
  },
  {
    name: "Kids' Sneakers",
    description: "Comfortable and stylish sneakers for kids",
    price: 30.0,
    categoryName: "Shoes",
    rating: 4.8,
  },
  {
    name: "Women's High Heels",
    description: "Elegant high heels for women",
    price: 60.0,
    categoryName: "Shoes",
    rating: 4.5,
  },
  {
    name: "Men's Formal Shoes",
    description: "Stylish formal shoes for men",
    price: 70.0,
    categoryName: "Shoes",
    rating: 4.7,
  },
  {
    name: "Travel Bag",
    description: "A durable travel bag",
    price: 70.0,
    categoryName: "Luggage Bags",
    rating: 4.7,
  },
  {
    name: "Handbag",
    description: "A fashionable handbag for women",
    price: 60.0,
    categoryName: "Luggage Bags",
    rating: 4.5,
  },
  {
    name: "Backpack",
    description: "A sturdy backpack for travel or school",
    price: 40.0,
    categoryName: "Luggage Bags",
    rating: 4.8,
  },
  {
    name: "Briefcase",
    description: "A professional briefcase for work",
    price: 80.0,
    categoryName: "Luggage Bags",
    rating: 4.6,
  },
  {
    name: "Wallet",
    description: "A compact wallet for essentials",
    price: 25.0,
    categoryName: "Luggage Bags",
    rating: 4.7,
  },
  {
    name: "Wooden Sofa",
    description: "Sofa made from acacia wood",
    price: 150.23,
    categoryName: "Furniture",
    rating: 3,
  },
  {
    name: "Dining Table",
    description: "A large dining table for family meals",
    price: 250.0,
    categoryName: "Furniture",
    rating: 4.5,
  },
  {
    name: "Armchair",
    description: "A comfortable armchair for relaxation",
    price: 100.0,
    categoryName: "Furniture",
    rating: 4.6,
  },
  {
    name: "Coffee Table",
    description: "A stylish coffee table",
    price: 80.0,
    categoryName: "Furniture",
    rating: 4.7,
  },
  {
    name: "Bookcase",
    description: "A spacious bookcase for storage",
    price: 120.0,
    categoryName: "Furniture",
    rating: 4.8,
  },
  {
    name: "Floor Lamp",
    description: "A stylish floor lamp",
    price: 70.0,
    categoryName: "Lights Lighting",
    rating: 4.6,
  },
  {
    name: "Table Lamp",
    description: "A convenient table lamp",
    price: 30.0,
    categoryName: "Lights Lighting",
    rating: 4.5,
  },
  {
    name: "Ceiling Light",
    description: "A modern ceiling light",
    price: 100.0,
    categoryName: "Lights Lighting",
    rating: 4.8,
  },
  {
    name: "Wall Sconce",
    description: "A decorative wall sconce",
    price: 50.0,
    categoryName: "Lights Lighting",
    rating: 4.7,
  },
  {
    name: "Outdoor Lighting",
    description: "Durable lighting for outdoor spaces",
    price: 80.0,
    categoryName: "Lights Lighting",
    rating: 4.6,
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
