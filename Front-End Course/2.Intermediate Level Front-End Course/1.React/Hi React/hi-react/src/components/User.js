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
            <div key={friend.id}>{friend.name}</div>
        )
        }
        </>
    )
}

export default User;