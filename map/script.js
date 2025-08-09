var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = [];

doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(numbers);
console.log(doubledNumbers);

function pluck(array, property) {
  var colors = array.map(function (item) {
    return item[property];
  });
  return colors;
}

var paints = [{ color: "red" }, { color: "blue" }, { color: "yellow" }];
console.log(paints);
console.log(pluck(paints, "color"));
