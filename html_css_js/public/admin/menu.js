const mockData = [
  {
    _id: "item1",
    name: "Gobi Manchurian",
    category: "starter",
    subCategory: "veg",
    status: "available",
    description: "Gobi Manchurian",
    imgPath: "image path",
    price: 80,
  },
  {
    _id: "item2",
    name: "Paneer Tikka",
    category: "starter",
    subCategory: "veg",
    status: "available",
    description: "Paneer Tikka",
    imgPath: "image path",
    price: 90,
  },
];

async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
}

module.exports = { mockData, fetchData };
