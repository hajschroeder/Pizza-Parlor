//Business Logic
function Pizza(size, toppings){
  this.size = size
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function(){
  
}
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



