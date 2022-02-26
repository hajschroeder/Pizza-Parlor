//Business Logic
function Pizza(size, toppings){
  this.size = size
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function(){
  let sizePrice= 0;
  let toppingPrice = this.toppings.length
  if (this.size === "small"){
    sizePrice+=10;
  } else if (this.size === "medium"){
    sizePrice+=13;
  } else if (this.size === "large"){
    sizePrice +=15;
  }
  let total= sizePrice + toppingPrice;
  return total;
}

// Test code for Business Logic
let firstPizza = new Pizza("small", ["pep", "mush"])
let secondPizza = new Pizza("medium", ["whatever", "placeholder", "doesn't matter"])
let thirdPizza = new Pizza("large", ["topping1", "topping2", "topping3", "topping4"])
console.log(firstPizza.pizzaPrice());
console.log(secondPizza.pizzaPrice());
console.log(thirdPizza.pizzaPrice());

//User Logic
$(document).ready(function(){
  $("form#form-one").submit(function(event){
    event.preventDefault();
    let inputtedSize = $("#size").val();
    let inputtedToppings= [];
    $("input[name='toppings']:checked").each(function(){
        inputtedToppings.push($(this).val());
      });
      console.log(inputtedToppings)

    let userPizza = new Pizza(inputtedSize, inputtedToppings);

    $("#cost").text(userPizza.pizzaPrice());
    console.log(userPizza.pizzaPrice());
  })
})
