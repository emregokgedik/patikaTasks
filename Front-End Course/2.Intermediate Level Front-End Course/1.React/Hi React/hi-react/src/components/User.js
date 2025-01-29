function User({name, surname, age, isLoggedIn, friends}){
    console.log(name, surname, age, isLoggedIn, friends);
    return (
        <>
        <h1>
            {isLoggedIn ? `Hello ${name} ${surname}! (age: ${age})` : "Please login."}
        </h1>
        <h2>Friends</h2>
        {
            friends.map((friend,index)=>
            <div key={index}>{index} - {friend}</div>
        )
        }
        </>
    )
}

export default User;