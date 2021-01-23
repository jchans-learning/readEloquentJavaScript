/*

“Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.”

Excerpt From: Marijn Haverbeke. “Eloquent JavaScript.” Apple Books. 

*/

let boardDimension = [8, 8];


console.log(`This is a chessboard of ${boardDimension[0]} x ${boardDimension[1]}`);

for (let i = 0; i < boardDimension[0]; i++) {
  let line = '';
  for (let j = 0; j < boardDimension[1]; j++) {
    const checkPosition = i + j;
    if (checkPosition % 2 == 0) {
      line += ' ';
    } else {
      line += '#';
    }
  }
  console.log(line);
}