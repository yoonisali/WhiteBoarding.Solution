// write alg that replaces spaces with %20
// can not use replace()
// can not use regex

// fx replaceSpace(string) => string
// loop through each character of the string to see if it is a space or not 
let input = "jasmine ann jones";
// ouput = "jasmine%20ann%20jones"

function replaceSpace(string) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      output += string[i];
    } else {
      output += "%20";
    }
  }
  return output;
}

// Recursive Function 

// base case 
// Terminition
// string as an input
function replaceSpace(string) {
  if (string.length === 0) {
    return "";
  }

  if (string[i] !== " ") {
    return string[i] + replaceSpace();
  } else {
    return "%20" + replaceSpace();
  }
}

console.log(replaceSpace(input));