//Business Logic
function Pizza(size, toppings){
  this.size = size
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function(){
  total = 0;
  let toppingPrice= this.toppings.length;
  if (this.size === "small"){
    total+=10;
  } else if  (this.size === "medium"){
    total+=13;
  } else if (this.size === "large"){
    total +=15;
  }
  return total+=toppingPrice;
};

let firstPizza = new Pizza("small", ["pep", "mush"])
let secondPizza = new Pizza("medium", ["whatever", "placeholder", "doesn't matter"])
let thirdPizza = new Pizza("large", ["topping1", "topping2", "topping3", "topping4"])
console.log(firstPizza.pizzaPrice());
console.log(secondPizza.pizzaPrice());
console.log(thirdPizza.pizzaPrice());

// Pizza.prototype.pizzaPrice = function(){
//   let total = 0
//   let small= {
//     name: "small",
//     value: 10
//   }
//   if (this.size = small);{
//   total += small.value;
//   }
// } 

// Pizza.prototype.pizzaPrice = function(){
//   let total = 0
//   let pizzaSize = new Map()
//   pizzaSize.set("small", 10)
//   pizzaSize.set("medium", 13)
//   pizzaSize.set("large", 15)

//   this.size = pizzaSize;
//   if (pizzaSize.has("small") === true){
//     total += pizzaSize.get("small")
//   } else if (pizzaSize.has("medium") === true){
//     total += pizzaSize.get("medium")
// } else if (pizzaSize.has("large") === true){
//     total += pizzaSize.get("large")
// } 
//   console.log(total);
// } 



