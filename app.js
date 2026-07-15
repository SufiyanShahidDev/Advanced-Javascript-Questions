
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


