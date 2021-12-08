import { input, testInput } from "./input.js";

const report = {
  bits: {},
  gammaValue: '',
  epsilonValue: ''
}
input[0].split('').forEach ( (value, i) => {
  report.bits[i+1] = {
    0: 0,
    1: 0
  }
})
input.forEach( value => {
  for (let bitIndex = 0; bitIndex < value.length; bitIndex++) {
    (value[bitIndex] == 0 ? report.bits[bitIndex+1][0]++ : report.bits[bitIndex+1][1]++)
  }
})

Object.values(report.bits).forEach( bit => {
  report.gammaValue += bit[0] > bit[1] ? 0 : 1
  report.epsilonValue += bit[0] < bit[1] ? 0 : 1
})
report.gammaValue = parseInt(report.gammaValue, 2)
report.epsilonValue = parseInt(report.epsilonValue, 2)

console.log(`Resultado del reto: ${report.gammaValue * report.epsilonValue}`); // 4191876