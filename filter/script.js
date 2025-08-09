var products = [
  { name: "Apple", type: "fruit", price: 2 },
  { name: "Banana", type: "fruit", price: 5 },
  { name: "Pineapple", type: "fruit", price: 3 },
  { name: "Celery", type: "vegetable", price: 6 },
  { name: "Onion", type: "vegetable", price: 1 },
];

var filteredProducts1 = products.filter(function (product) {
  return product.type === "fruit";
});
console.log(filteredProducts1);

var filteredProducts2 = products.filter(function (product) {
  return product.type === "fruit" && product.price < 5;
});
console.log(filteredProducts2);
