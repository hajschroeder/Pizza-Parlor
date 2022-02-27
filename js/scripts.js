//Business Logic
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function(){
  let sizePrice= 0;
  let toppingPrice = this.toppings.length;
  if (this.size === "small"){
    sizePrice+=10;
  } else if (this.size === "medium"){
    sizePrice+=13;
  } else if (this.size === "large"){
    sizePrice +=15;
  }
  let total= sizePrice + toppingPrice;
  return total;
};

//User Logic
$(document).ready(function(){
  $("form#form-one").submit(function(event){
    event.preventDefault();
    let inputtedSize = $("#size").val();
    let inputtedToppings= [];
    $("input[name='toppings']:checked").each(function(){
        inputtedToppings.push($(this).val());
      });

    let userPizza = new Pizza(inputtedSize, inputtedToppings);

    $("#cost").text("$"+ userPizza.pizzaPrice()+" is your total");
  })
})
