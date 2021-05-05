
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