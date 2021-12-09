import { input, testInput } from "./input.js";

const getCommonBits = array => {
  const report = {
    bits: {}
  }
  var commonBits = '';
  array[0].split('').forEach ( (value, i) => {
    report.bits[i+1] = {
      0: 0,
      1: 0
    }
  })
  array.forEach( value => {
    for (let bitIndex = 0; bitIndex < value.length; bitIndex++) {
      (value[bitIndex] == 0 ? report.bits[bitIndex+1][0]++ : report.bits[bitIndex+1][1]++)
    }
  })

  Object.values(report.bits).forEach( bit => {
    commonBits += bit[0] > bit[1] ? 0 : 1
  })
  return commonBits;
}

const getNonCommonBits = array => {
  const report = {
    bits: {}
  }
  var nonCommonBits = '';
  array[0].split('').forEach ( (value, i) => {
    report.bits[i+1] = {
      0: 0,
      1: 0
    }
  })
  array.forEach( value => {
    for (let bitIndex = 0; bitIndex < value.length; bitIndex++) {
      (value[bitIndex] == 0 ? report.bits[bitIndex+1][0]++ : report.bits[bitIndex+1][1]++)
    }
  })

  Object.values(report.bits).forEach( bit => {
    nonCommonBits += bit[1] < bit[0] ? 1 : 0
  })
  return nonCommonBits;
}

const filterArray = (array, index, base, common) => {
  let filtered = array.filter( value => value[index] === base[index] )
  console.log(filtered);
  if(common){
    if (filtered.length > 1) return filterArray(filtered, index+1, getCommonBits(filtered), true)
  } else{
    if (filtered.length > 1) return filterArray(filtered, index+1, getNonCommonBits(filtered), false)
  }
  return filtered
}
const oxygen = parseInt(filterArray(input, 0, getCommonBits(input), true)[0], 2)
const co2 = parseInt(filterArray(input, 0, getNonCommonBits(input), false)[0], 2)

console.log(`Resultado del reto: ${oxygen * co2}`); // 3414905