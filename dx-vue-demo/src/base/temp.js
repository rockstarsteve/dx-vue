

const oldArrayproperties = Array.prototype


const newArry = Object.create(oldArrayproperties)

console.log(newArry)


let myArry = [1,23,4,5,6]
myArry.push(334444444)

console.log(myArry)
