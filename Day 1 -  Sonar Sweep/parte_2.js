import {input, testInput} from './input.js'

var prevSum = null;
const results = {
  positive: 0,
  negative: 0
}
for (let i = 0; i < input.length; i++) {
  if(i === 0 || i === 1) continue;
  const window = [
    input[i - 2],
    input[i - 1],
    input[i]
  ]
  const windowSum = window.reduce((value, currentVal) => currentVal + value);
  if(prevSum !== null){
    ((windowSum - prevSum) > 0 ? results.positive++ : results.negative++);
  }
  prevSum = windowSum;
}
console.log("Resultado del reto: " + results.positive); // Resultado del reto: 1706