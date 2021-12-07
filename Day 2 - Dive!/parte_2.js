import {input, testInput} from './input.js'

const position = {
  horizontal: 0,
  depth: 0,
  aim: 0
}

input.forEach(command => {
  const movement = {
    direction: command.split(" ")[0],
    units: parseInt(command.split(" ")[1])
  }
  if(movement.direction === "forward"){
    position.horizontal+=movement.units
    position.depth+=movement.units*position.aim
  } else if(movement.direction === "up"){
    position.aim-=movement.units
  } else if(movement.direction === "down"){
    position.aim+=movement.units
  }
});

console.log(`Resultado del reto: ${position.horizontal * position.depth}`); // Resultado del reto: 1845455714