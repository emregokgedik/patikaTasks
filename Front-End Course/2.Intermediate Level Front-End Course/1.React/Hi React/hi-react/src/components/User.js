function User({name, surname, age, isLoggedIn}){
    console.log(name, surname, age, isLoggedIn);
    return (
        <h1>
            {isLoggedIn ? `Hello ${name} ${surname}! (age: ${age})` : "Please login."}
            
        </h1>
    )
}

export default User;