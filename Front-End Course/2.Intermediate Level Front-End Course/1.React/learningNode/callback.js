import fetch from "node-fetch"
//Callback Functions
// setTimeout(() => {
//     console.log("Hi!");
// }, 2000);

// setInterval(() => {
//     let a = 1
//     console.log(a);
// }, 1000);

// const sayHi = (cb) => {
//     cb();
// }

// sayHi(() => {
//     console.log("Hello")
// });

fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json()
.then(users => console.log(users))
);