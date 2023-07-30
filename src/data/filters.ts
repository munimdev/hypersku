export const dateFilter = Array.from({ length: 5 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return {
    name: date.toLocaleDateString(),
    value: date.toISOString(),
  };
});

export const priceFilter = [
  {
    name: "Under $10",
    value: "0-10",
  },
  {
    name: "$10 to $25",
    value: "10-25",
  },
  {
    name: "$25 to $50",
    value: "25-50",
  },
  {
    name: "$50 to Above",
    value: "50-999999999",
  },
];

export const deliveryFilter = [
  {
    name: "Under 7 days",
    value: "0-7",
  },
  {
    name: "7 to 14 days",
    value: "7-14",
  },
  {
    name: "14 to 21 days",
    value: "14-21",
  },
];
