
// Section 1 – Objects (1–5)

// Q1.
// JavaScript Object kya hota hai? Real-world example ke sath explain karein.


// Ans: A JavaScript Object is a collection of related data stored as key-value pairs.

// Real world example:

// const student = {
//     name: "Ali",
//     age: 20,
//     city: "Karachi"
// };

// console.log(student);



// Q2.
// Dot notation aur Bracket notation me kya difference hai?

// Dot notation is Simple and easy to read.

// Bracket notation is Useful for dynamic property names or property names with spaces.



// const user = {

//     name: "Hasan",

//     age: 22

// };

// // Dot Notation
// console.log(user.name);

// // Bracket Notation
// console.log(user["name"]);

// Dono tarikon se name access karke dikhayein.


// Q3.
// Niche diye object ka output batayein.



// const student = {

// name: "Ali",

// age: 20

// };



// student.city = "Karachi";

// delete student.age;



// console.log(student); // {  name: "Ali",  city: "Karachi"}


// Q4.
// Object.keys(), Object.values(), aur Object.entries() kya return karte hain?

// Example ke sath explain karein.

// Object.keys(): Returns all property names.
// Object.values(): Returns all property values.
// Object.entries(): Returns key-value pairs as nested arrays.

// const student = {
//     name: "Ali",
//     age: 20,
//     city: "Karachi"
// };

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));


// Q5.
// Ek function likhein jo object ke andar total properties count kare.

// Expected:

// function countProperties(obj) {
//     return Object.keys(obj).length;
// }

// console.log(
//     countProperties({
//         name: "Ali",
//         age: 20,
//         city: "Lahore"
//     })
// );


// Section 2 – Arrays (6–10)

// Q6.
// Array aur Object me kya difference hai?

// Ans: Array Stores multiple values. It Uses index numbers. It can be Written using [].
// Object Stores key-value pairs. It Uses property names (keys). It can be Written using {}.

// Section 7 – call(), apply(), bind() (27–29)

// Q27.
// call(), apply(), aur bind() me difference explain karein.


// Ans1 call() is used to call a function and it also allows you add arguments init.
// apply() is same but it needs values in array form.
// bind() give result in return of function.



// Q28.
// Output predict karein.



// const user = {

// name:"Hasan"

// };



// function greet(city){

// console.log(this.name, city);

// }



// greet.call(user,"Karachi"); // output should be Hasan or karachi



// Q29.
// Output batayein.



// const user = {

//     name: "Ali"

// };



// function sayHello(country) {

//     console.log(this.name, country);

// }



// const result = sayHello.bind(user);



// result("Pakistan");  // Ali Pakistan


