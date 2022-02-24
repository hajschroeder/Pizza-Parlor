//Business Logic
function Pizza(size, toppings, price){
  this.size = size;
  this.toppings= toppings;
  this.price = price
}

let firstPizza = new Pizza("medium", ["topping1", "topping2"], 15);
