/*

“Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).”

Excerpt From: Marijn Haverbeke. “Eloquent JavaScript.” Apple Books. 

*/

for (let i = 0; i < 100; i++) {
  let numberToCheck = i + 1
  if (numberToCheck % 3 == 0 || numberToCheck % 5 == 0){
    if (numberToCheck % 3 == 0 && numberToCheck % 5 != 0) console.log('Fizz');
    else if (numberToCheck % 3 != 0 && numberToCheck % 5 == 0) console.log('Buzz');
    // console.log('Yup!');
    else console.log(numberToCheck);
  } else {
    console.log(numberToCheck);
  }
}