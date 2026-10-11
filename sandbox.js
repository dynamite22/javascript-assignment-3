const scores = [20, 10, 25, 0, 60, 30, 15, 5, 35, 65];

let total = 0;
let highest = scores[0];
let lowest = scores[0];

//for loop
for(let i = 0; i < scores.length; i++) {
   const realscore = scores[i];

   console.log(`score ${i + 1}: ${realscore}`);
  

  total += realscore;

  // highest score
  if (realscore > highest) {
    highest = realscore;
  }

  // lowest score
  if (realscore < lowest) {
    lowest = realscore;
  }}

  const average = total / scores.length;

  console.log(`total: ${total}`);
  console.log(`average: ${average}`);
  console.log(`highest: ${highest}`);
  console.log(`lowest: ${lowest}`);
