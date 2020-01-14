// var name = 'Tina'

var people = [

    {name: "Abby", age: 27},
    {name: "Charles", age: 21},
    {name: "James", age: 17},
    {name: "John", age: 19},
]

// console.log(people);
// variable containing my name
const US = 50
// constant containing the number of us states
var nine = 5 + 4
// variable that adds 5 to 4
// console.log(nine)
// var age = 20

function sayHewwo() {
    alert("hewwo!!")
}
sayHewwo()



function checkAge(age, name) {
    if (age >= 21) {
        alert('Sah, ' + name + '! come blow a sick smoke ring while we laugh at gen Z! haha ok zoomer amirite');
    }
    else if (age <= 21) {
        alert('sorry ' + name + ', you are too young to purchase tobacco! lmao have fun getting drafted!')
    }
}
for(var i = 0; i <people.length; i++) {
    checkAge(people[i].age, people[i].name)
}
// checkAge(21, "charles");
// checkAge(27, "Abby")
// checkAge(17, "James")
// checkAge(19, "John")
var veggies = ['vegeta', 'kakarot', 'nappa', 'broly', 'raditz', 'bardock']

for(var i = 0; i < veggies.length; i++) {
    console.log(veggies[i])
};


var wut = 'Hello World';



function getLength() {
    if (wut.length % 2 == 0) {
        // .length counts the number of characters in the variable
        console.log('The world is nice and even!');
    }
    else {
        console.log('The world is an odd place!');
    }
}
getLength()