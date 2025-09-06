let computers = [
  {
    brand: "Acer",
    ram: 8,
  },
  {
    brand: "Apple",
    ram: 16,
  },
  {
    brand: "Samsung",
    ram: 24,
  },
];

const allComputersCanRunProgram = computers.every(function (computer) {
  return computer.ram >= 16;
});

console.log(allComputersCanRunProgram);

const onlySomeComputersCanRunProgram = computers.some(function (computer) {
  return computer.ram >= 20;
});

console.log(onlySomeComputersCanRunProgram);
