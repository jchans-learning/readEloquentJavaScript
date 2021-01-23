/*

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

Excerpt From: Marijn Haverbeke. “Eloquent JavaScript.” Apple Books. 

*/

console.log('Made by for loop:');

let baseBrickStep = '';
let finalBrickStepLength = 7;

for (let i = 0; i < finalBrickStepLength; i++) {
  baseBrickStep += '#';
  console.log(baseBrickStep);
}

// 做個分隔線-----------------------------------------
console.log('\n');
// -------------------------------------------------

console.log('Made by while loop:');

baseBrickStep = '';

while (baseBrickStep.length < 7) {
  baseBrickStep += '#';
  console.log(baseBrickStep);
}