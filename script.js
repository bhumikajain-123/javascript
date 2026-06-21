// Api means two different application can communicate with each other 
// class is a blueprint 
// object is a instance of class
// # makes a property private, so it can only be accessed and manipulated inside the class, not outside the class.
// Encapsulation means wrapping data and functions together in a single unit (class) and protecting the data from direct access.

// Simple Comparison
// Feature	                                Your Object                     	Encapsulation
// Data + Methods Together	                        ✅ Yes                          	✅ Yes
// Data Hidden	                                    ❌ No                           	✅ Yes
// Direct Access Restricted	                        ❌ No                           	✅ Yes


// Inheritance allow  a child class can inherit properties and methods from a parent class.

// In OOP, polymorphism allows the same method name to behave differently in different classes.
        // The child class creates a method with the same name as the parent method.
        //     This is called Method Overriding.
        //     In JavaScript, polymorphism is mainly achieved through method overriding.
        //     Same method name, different behavior.



//         Types of Polymorphism
// 1. Runtime Polymorphism (Method Overriding)

// This is what JavaScript supports.

// class Parent {
//     show() {}
// }

// class Child extends Parent {
//     show() {}
// }

// The method that runs is decided at runtime.

// 2. Compile-Time Polymorphism (Method Overloading)

// Languages like Java and C++ support it.

// Example idea:

// add(10, 20)
// add(10, 20, 30)

// JavaScript does not support true method overloading.

// If you write:

// class Test {
//     add(a, b) {}

//     add(a, b, c) {}
// }

// The second method replaces the first one.

// Abstraction means hiding unnecessary details and showing only the important features to the user.

// The user only knows what to do, not how it works internally.

// DOM is a representation of an HTML page that allows JavaScript to access and modify HTML elements.

// What is a Callback?

// A callback is a function passed as an argument to another function.

// A callback is a function that is passed as an argument to another function and is executed later when needed.

// Callback Hell is a situation where multiple callbacks are nested inside each other, making the code difficult to read, understand, and maintain.


// Interview Definition

// Anonymous Function: A function without a name. It is often used as a callback function, inside Promises, setTimeout, event handlers, etc.




// is an anonymous callback function because:

// It has no name.
// It is passed to another function.
// It runs later when called.
// const student = {
// name : "bhumika",
// age: 21,
// course : "B.tech",


// IIFE (Immediately Invoked Function Expression)

// Definition:
// An IIFE is a function that is created and executed immediately.

// Example
// (function () {
//     console.log("Hello");
// })();
// Output
// Hello
// Simple Meaning
// Normal function:
// function greet() {
//     console.log("Hello");
// }

// greet();

// First create → then call.

// IIFE:
// (function () {
//     console.log("Hello");
// })();

// Create and call at the same time.

// One-line definition for interview

// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs immediately after it is defined.

// Closure is a feature in JavaScript where an inner function remembers and can access variables from its outer function's scope even after the outer function has finished executing.

// For your placement interviews, remember these 3 key benefits:

// Data Hiding / Private Variables
// Remembering Values (State)
// Useful in Callbacks, Event Handlers, and Async Code



// A Higher Order Function is a function that:

// Takes another function as a parameter, or
// Returns another function.


// A Higher Order Function is a function that takes one or more functions as arguments or returns a function as its result.

// Examples:

// map()
// filter()
// reduce()
// setTimeout()
// Functions that return functions (closures)













//   ----------------------------  Practical------------------------------




// greet(name){
// console.log(`hello, how are you ${name}`);
// }

// };


// console.log(student.name)
// console.log(student["course"])
// student.greet(student.name);





// class student{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//      greet(){
//             console.log(`Hello,how are you ${this.name}`);
//         }
// }

//  const s1 = new student("bhumika",21);
//  console.log(s1.name);
//  console.log(s1.age);
//  s1.greet();



// class student{

//     #age;

//     constructor(age){
//         this.#age = age;
//     }
//     greet(){
//         console.log(`i am ${this.#age} year old`);
//     }
// }

// const s1 = new student(21);
// s1.greet();




//------------------ inheritance -------------------------

// class Animal{
//     eat(){
//         console.log("Animal is eating");
//     }
// }

// const a1 = new Animal();
// a1.eat();

// class Cat extends Animal{
//     display(){
//         console.log("cat");
//     }
    
// }
// const c1 = new Cat();
// c1.eat();
// c1.display();




// class Person{
//     constructor(name){
//         this.name = name;
//     }
    
// }

// const p1 = new Person("bhumika");
// p1.greet();

// class Student extends Person{
//     constructor(name,course){
//     super(name);
//     this.course = course;

//     }
//     greet(){
//         console.log(`Hello,How are you ${this.course} and ${this.name}`);
//     }

// }
// const s1 = new Student("Bhumika","Btech");
// s1.greet();




//              ----------------polymorphism --------------------------

// class Animal{
//     sound(){
//         console.log("Animal make sound");
//     }
// }

// class Dog extends Animal{
    
// sound(){
//     super.sound();
//     console.log("Cat sound meow");
// }
// }

// const d1 = new Dog();
// d1.sound();



// --------------------------call back ------------------------------------

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function callprocessor(callback){
//     callback("bhumika");
// }
// callprocessor(greet);



// ------------- through arrow function -----------------\

// greet = name =>{
//     console.log(`Hello ${name}`);
// }

// callprocessor = callback =>{
//     callback("bhumika");
// }
// callprocessor(greet);


// setTimeout(() => {
//     console.log("hello");
    
// }, 5000);


// function getdata(callback){
//     setTimeout(function (){
//         console.log("hello");
//         callback();
//     },2000);
// }
// getdata(()=>{
//     console.log("data is completed");
// })


// function login(callback) {
//     setTimeout(() => {
//         console.log("Login Successful");
//         callback();
//     }, 1000);
// }

// function openCourse(callback) {
//     setTimeout(() => {
//         console.log("Course Opened");
//         callback();
//     }, 1000);
// }

// function watchVideo(callback) {
//     setTimeout(() => {
//         console.log("Video Completed");
//         callback();
//     }, 1000);
// }

// function takeQuiz(callback) {
//     setTimeout(() => {
//         console.log("Quiz Submitted");
//         callback();
//     }, 1000);
// }

// login(() => {
//     openCourse(() => {
//         watchVideo(() => {
//             takeQuiz(() => {
//                 console.log("Course Finished");
//             });
//         });
//     });
// });



//  -------------------------------promise ----------------------------------------

// const mypromise = new Promise(function(resolve, reject){

//     let success = true;

//     if(success){
//         resolve("Data received");
//     }else{
//         reject("Error Occurred");
//     }

// });

// mypromise.then(function(result){
//     console.log(result);
// });

// mypromise.catch(function(error){
//     console.log(error);
// });



// function getData(dataId,getNextData) {
//     return new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     console.log("data",dataId);
//     resolve("success");
//     if(getNextData){
//             getNextData();
//     }
    
//    },4000);

//     });
 
// }


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am Promise");
//         // resolve("success");
//         reject("Network Error");
//     });
// }

// const promise = getPromise();

// promise.then((result) => {
//     console.log("Promise fulfilled", result);
// });

// promise.catch((error) => {
//     console.log("error occured",error);
// });



// const getPromise =() =>{
//     return new Promise((resolve,reject)=>{
//       console.log("I am a Promise");
     
//       reject("error2.0")
//        resolve("success");
//     });
// }


//  getPromise()
// .then((result)=>{
//     console.log("the promise fullfilled",result);
// })
// .catch((error)=>{
//        console.log("error occured",error);
// });



// function getasync1(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      console.log("data1");
//      resolve("success");
//     },4000);
//     })
// }

// function getasync2(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      console.log("data2");
//      resolve("success2");
//     },4000);
//     })
// }


// console.log("fetching data");
// getasync1()
// .then((result)=>{
//     console.log("fullfilled1",result);

// getasync2()
// .then((result)=>{
//     console.log("fullfilled2",result);
// })    

// })


// function getdata(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//    console.log("data",dataId);
//      resolve("success");
//         },3000);
      
//     });
// }




// (async function(){
//     await getdata(1);
//     await getdata(2);
// })();



//  -------------------------------  weather -- data ---------------------------------


// function getWeather(city){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve({
//             city : city,
//             temperature : 32,
//             condition : "sunny"

//            });
//         },4000)
//     });
// }

// function getWeather2(city){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve({
//             city : city,
//             temperature : 32,
//             condition : "sunny"

//            });
//         },4000)
//     });
// }


// ----------------------------- through promise --------------------

//  getWeather("Delhi")
// .then((result)=>{
//     console.log("city : ",result.city);
//     console.log("temperature : ",result.temperature);
//     console.log("condition : ",result.condition);

//     return getWeather2("Mumbai");

// })
// .then((result)=>{
//     console.log("city : ",result.city);
//     console.log("temperature : ",result.temperature);
//     console.log("condition : ",result.condition);

// });

//    ------------------ through async and await ----------------------------

// (async function (){
//     console.log("fetching weather data");
//     let data = await getWeather("delhi");
//     console.log("City : ",data.city);
//     console.log("temperature : ",data.temperature);
//     console.log("condition : ",data.condition);
// })();



// async function getWeather() {
//     const apiKey = "844a803cd7f0bdd35f64a00dcdcd0059";

//     const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${apiKey}&units=metric`
//     );

//     const data = await response.json();
//     console.log(data.name);
//     console.log(data.main.temp + "°C");
// }

// getWeather();


// function outer() {
//     let count = 0;

//     return function inner() {
//         count++;
//         console.log(count);
      
//     }
// }

// const counter = outer();

// console.log(counter());
// console.log(counter());




//   ------------------------object freeze -----------------------------------
"use strict";
const student = {
  name : "bhumika",
  age : 21
};

Object.freeze(student);

console.log(student.city);