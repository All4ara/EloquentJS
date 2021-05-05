
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