module.exports = function check(str, bracketsConfig) {
  // convert string to array
  let arrayOfBrackets = str.split('');

  // convert to array with strings of pair brackets
  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsConfig[i] = bracketsConfig[i][0] + bracketsConfig[i][1];
  }

  for (let i = 0; i < arrayOfBrackets.length;) {
    // concat current and next brackets and compares it with every pair config
    if (bracketsConfig.includes(arrayOfBrackets[i] + arrayOfBrackets[i + 1])) {
      arrayOfBrackets.splice(i, 2);
      i = 0;
    } else i++;
  }

  if (arrayOfBrackets.length == 0) {
    return true;
  } else return false;
}