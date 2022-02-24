

---
#TESTS#

DESCRIBE: Pizza()

TEST 1.)

1. TEST: It should return a Pizza object with toppings and a size indication
1. CODE: let firstPizza= new Pizza("medium" ["topping1", "topping2"], )
1. Expected Outcome: Pizza {size: "medium", toppings: ["topping1", "topping2]}
_TEST STATUS: Passing_


TEST 2.)

1. TEST: It should inlude a price property for the constructor
1. CODE: let firstPizza =  newPizza("medium", ["topping1", "topping2"], 15)
1. EXPECTED OUTCOME: Pizza {size: "medium", toppings: ["topping1", "topping2"], price: 15}
_TEST STATUS: Passing_

TEST 3.)

1. TEST: It should determine the prices based on the values of the properties
1. CODE: let firstPizza =  newPizza("medium", ["topping1", "topping2"], this.size+this.toppings)
1. EXPECTED OUTCOME: Pizza {size: "medium", toppings: ["topping1", "topping2"], price: 15}
_TEST STATUS: Not Passing_

