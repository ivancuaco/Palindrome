// variable
const given_value = "1 Red roses run no risk, sir, on Nurse's order 1.";


// check if the given value is a type of string
if (typeof given_value == 'string') {

  // check if the given value is a palindrome
  let is_palindrome = is_string_reversible(given_value);

  if (is_palindrome) {

    let reversed_string = is_palindrome;
    console.log(`The given string: ${given_value} is an example of a palindrome, the reversed value is: ${reversed_string}`);

  } else {
    console.log(`The given string: ${given_value} is not an example of a palindrome`);
  }

} else {
  console.log(`The given value: ${given_value} is not a string! The expected data type of the value is string`);
}


// function that returns a reversed value if it is a palindrome
function is_string_reversible(given_value) {

  given_value = given_value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let reversed_value = '';
  reversed_value = given_value.split('').reverse().join('');

  if (given_value === reversed_value) {
    return reversed_value;
  }

  return false;
}