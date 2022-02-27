# __Pizza Parlor__
### version 1.0
_[Click Here](#tests) to jump to TESTS_

### Contributer
* Hans Schroeder

### The Site
* [View the raw documents on GitHub](https://github.com/hajschroeder/Pizza-Parlor)
---

## Technologies Used
* HP Laptop with Windows 10
* GitBash and GitHub
* VS Code

## Resources Used
1. [Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/) 
1. [Learn How To Program](https://learnhowtoprogram.com) The curriculum for Epicodus students.
1. [w3Schools documentation on CSS stylings as well as jQuery](https://w3schools.com) A free web resource for coding and programming.
1. "Eloquent JavaScript 3rd Edition" by Marijn Haverbeke
1. [jQuery API documentation, for understanding how to use loops and arrays with checkbox data](https://api.jquery.com/each/)
1. [javascripttutorial.net](https://www.javascripttutorial.net/es6/javascript-map/)
1. [YouTube](www.youtube.com)
---

## Description

_This web app is an exercise in understanding Object Oriented Programming by means of a Pizza Parlor ordering form. The user is prompet to select what size pizza they want, and what toppings they would like, and then have the total returned back to them._


## Setup/Installation
* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser
* _All you need to view this site is an internet connected device_
* _As a public repository, a GitHub account is not required but it is recommended_

___

## Known Bugs
In it's current state, the site is working without any bugs. That being said, there is little to no styling done, so therefore little room for bugs to pop up. 


---

## License 
[MIT](https://choosealicense.com/licenses/mit/)

## Copyright
Hans J Schroeder 2022






---
# TESTS

DESCRIBE: Pizza()

TEST 1.)

* TEST: It should return a Pizza object with toppings and a size indication
* CODE: let firstPizza= new Pizza("medium" ["topping1", "topping2"], )
* Expected Outcome: Pizza {size: "medium", toppings: ["topping1", "topping2]}
* _TEST STATUS: Passing_


TEST 2.)

* TEST: It should inlude a price property for the constructor
* CODE: let firstPizza =  new Pizza("medium", ["topping1", "topping2"], 0)
* EXPECTED OUTCOME: Pizza {size: "medium", toppings: ["topping1", "topping2"]}
* _TEST STATUS: Passing_
* NOTE: _This property was later deleted and was incorporated into the prototype for this constructor_


DESCRIBE: Pizza.prototype.pizzaPrice()

TEST 1.)

1. TEST: It should assign a value to the size
1. CODE: let firstPizza =  new Pizza("small", ["topping1", "topping2"])
1. EXPECTED OUTCOME: firstPizza.pizzaPrice() //10
_TEST STATUS: Passing_

TEST 2.)

1. TEST: It should add the toppings to the value
1. CODE: firstPizza = new Pizza("small, {"topping2", "topping2"})
1. EXPECTED OUTCOME firstPizza.pizzaPrice(12)
* _TEST STATUS: Passing_
