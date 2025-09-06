let numbers = [10, 20, 30];
let sum = numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);

console.log(sum);

let primaryColors = [{ name: "red" }, { name: "green" }, { name: "blue" }];
let colors = primaryColors.reduce(function (previous, color) {
  previous.push(color.name);
  return previous;
}, []);

console.log(colors);

function balancedParens(string) {
  return !string.split("").reduce(function (previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    if (char === ")") {
      return --previous;
    }
    return previous;
  }, 0);
}

console.log(balancedParens("(((("));
console.log(balancedParens("(())"));
console.log(balancedParens("(()()())"));
console.log(balancedParens(")("));

let foods = [
  { name: "Apple", action: "To eat" },
  { name: "Coke", action: "To drink" },
  { name: "Juice", action: "To drink" },
  { name: "Pineapple", action: "To eat" },
  { name: "Bread", action: "To eat" },
];

let countByType = foods.reduce(
  function (previous, food) {
    if (food.action === "To eat") {
      previous.eatable += 1;
    }
    if (food.action === "To drink") {
      previous.drinkable += 1;
    }
    return previous;
  },
  { eatable: 0, drinkable: 0 }
);

console.log(countByType);

function unique(array) {
  return array.reduce(function (accumulator, element) {
    let found = accumulator.find(function (number) {
      return element === number;
    });

    if (!found) {
      accumulator.push(element);
    }

    return accumulator;
  }, []);
}

let nonUniqueNumbers = [1, 1, 2, 3, 3, 4, 4, 4];
console.log(unique(nonUniqueNumbers));
