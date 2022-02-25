

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
1. CODE: let firstPizza =  newPizza("medium", ["topping1", "topping2"], 0)
1. EXPECTED OUTCOME: Pizza {size: "medium", toppings: ["topping1", "topping2"]}
_TEST STATUS: Passing_

TEST 3.)

1. TEST: It should include a prototype to select the size
1. CODE: let firstPizza = new Pizza("small", ["topping1", "topping2"])
1. EXPECTED OUTCOME: Pizza {size: "small", "medium", "large", toppings: ["topping1", "topping2"]}

