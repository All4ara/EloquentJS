
// challange was to creat a trinagle using hashtags:
// #
// ##
// ###
// ####
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

// challenge was to FizzBuzz depending on the conditions given
// 1
// 2
// Fizz
// 4
// Buzz
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0 && n % 5 == 0) output += "FizzBuzz";
  else if (n % 3 == 0) output += "Fizz";
  else if (n % 5 == 0) output += "Buzz";

  console.log(output || n);
}

// challange was to creat a trinagle using hashtags:
//  # # # #
// # # # #
//  # # # #
// # # # #
let size = 8;

let sqr = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      sqr += " ";
    } else {
      sqr += "#";
    }
  }
  sqr += "\n";
}

console.log(sqr);

// found an interesting function for understanding Nested Scopes

const hummas = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  }
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
}

hummas(1)

// a function that calls itself is called RECURSIVE

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 4))

// Recursion in findin a short sequence to the number specifed

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5 )`) || find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(14))