const basicArray = ["apple","banana","orange"]
const users = [
    {
        name: "John",
        age: 23
    },
    {
        name: "John",
        age: 23
    },
    {
        name:"Martin",
        age: 19
    }]
users.push({name: "Daniel",age:20})
console.log(users);

users.map((item)=>{
    console.log(item.name)
})

const findIt = users.find((item)=>item.name==="John" && item.age>20)
console.log(findIt);

const filterIt = users.filter((item)=>item.name==="John"&&item.age>20)
console.log(filterIt)

const isMatch = users.some((item)=>item.name==="John"&&item.age<20)
console.log(isMatch);

const isFit = users.every((item)=>item.age>0)
console.log(isFit);

const isInclude = basicArray.includes("apple")
console.log(isInclude)