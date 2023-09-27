// console.log("Hi my name is Martin");

// Intermediate Exercise 1

// const cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
// cars.sort();
// console.log(cars);

// Intermediate Exercise 2

// const fruits = ["apple", "banana", "kiwi"];
// console.log(fruits);
// fruits.push("orange");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// const animals = ["monkey", "horse", "dog"];
// console.log(animals);
// animals.sort();
// console.log(animals);
// animals.unshift("cat");
// console.log(animals);

// Intermediate Exercise 3

// let fruits = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

// const fArray = fruits.split("/");
// document.write(`${fArray[0]} <br> ${fArray[1]} <br> ${fArray[2]} <br> ${fArray[3]} <br> ${fArray[4]} <br> ${fArray[5]} <br> ${fArray[6]} <br> ${fArray[7]}`);

// Advanced Exercise 1

// let a = 7;

// let b = 14;

// let c = "21";
// let c1 = Number(c);
// let d = '36';
// let d1 = Number(d);
// let e = 42;

// let z = a+b+c1+d1+e; 


// let f = '1';
// let f1 = Number(f);
// let g = 15;
// let h = 8;
// let i = "1";
// let i1 = Number(i);
// let y = f1*g*h*i1;

// let x = z/y;
// document.write(x);

// Advanced Exercise 2

// 1.     Remove "Greg" from the array.
// let people = ["Greg", "Mary", "Devon","James"];
// const remowed = people.shift();
// people.splice(0,1);
// console.log(people);


// 2.     Add "Matt" to the front of the array.

// let people = ["Greg", "Mary", "Devon","James"];
// people.unshift("Matt");
// console.log(people);

// 3.     Remove “James” from the array.

// let people = ["Greg", "Mary", "Devon","James"];
// const removed = people.pop();
// console.log(people);

// 4.     Add your name to the end of the array.

// let people = ["Greg", "Mary", "Devon","James"];
// people.push("Barno");
// console.log(people);

// 5.     Make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".

// let people = ["Matt", "Greg", "Mary", "Devon","James"];
// console.log(people.slice(1,5));

// 6.     Using the indexOf method, find the index of where "Mary" is located.

// let people = ["Greg", "Mary", "Devon","James"];
// console.log(people.indexOf('Mary'));

// 7.     Using the indexOf method, find the index of where "Foo" is located (this should return -1).

// let people = ["Greg", "Mary", "Devon","James"];
// console.log(people.indexOf('Foo'));

// 8.     Redefine the people variable with the values you started with.

// let people = ["Greg", "Mary", "Devon","James"];
// console.log(people);


// 9.     Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Anna".
//  Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Anna", "James"].

// let people = ["Greg", "Mary", "Devon","James"];
// people.splice(2, 1, "Elizabeth", "Anna");
// console.log(people);


// Advanced Exercise 3

const numbers = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];

// Select and output the numbers 11, 25, 17, 27 and 0 in the console.

console.log(numbers[1][1], numbers[4][2], numbers[5][3], numbers[2][3], numbers[2][1]);