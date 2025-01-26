import axios from "axios";
async function getData(userID){
     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/"+userID)
     const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+userID)
     console.log("users ",users);
     console.log("posts ",posts);
     
}
export {getData};