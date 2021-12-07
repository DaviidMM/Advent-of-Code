import {input, testInput} from './input.js'

var prevValue = null
const results = {
  positive: 0,
  negative: 0
}
for (let i = 0; i < input.length; i++) {
  const actualValue = input[i]
  if(i === 0){
    prevValue = actualValue;
    continue;
  }
  ((actualValue - prevValue) > 0 ? results.positive++ : results.negative++ );
  prevValue = actualValue;
}

console.log(results);