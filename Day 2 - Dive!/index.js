import {input} from './input.js'

const position = {
  horizontal: 0,
  depth: 0
}

input.forEach(command => {
  const movement = {
    direction: command.split(" ")[0],
    units: parseInt(command.split(" ")[1])
  }
  if(movement.direction === "forward"){
    position.horizontal+=movement.units
  } else if(movement.direction === "up"){
    position.depth-=movement.units
  } else if(movement.direction === "down"){
    position.depth+=movement.units
  }
});

console.log(position.horizontal * position.depth); // 1855814