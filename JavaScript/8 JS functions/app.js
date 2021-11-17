const words = ["spray", "candy", "burgers", "aspirin", "wonderful", "casual"]

let longWords = words.filter(word => word.length > 6)
console.log(longWords); 

var numbers = [1,4,9]

var roots = numbers.map(Math.sqrt)
console.log(roots);


console.log(

[0,1,2,3,4].reduce(function(accumulator, currentValue, currentIndex,array){
  return accumulator + currentValue
}))


const items = ["item1", "item2", "item3", "item4"]
const copy = [];

items.forEach(function(item){
  copy.push(item)
})

console.log(copy);