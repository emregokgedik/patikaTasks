console.log("Starting...");

setTimeout(() => {
    console.log("Hello after 2 seconds!");
}, 2000);

const interval = setInterval(() => {
    console.log("Hello, this is forever hello!");
}, 2000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Stopped the interval.");
}, 10000);

const sayHi = (name) => console.log(`Hi, ${name}!`);
sayHi("Emre");
