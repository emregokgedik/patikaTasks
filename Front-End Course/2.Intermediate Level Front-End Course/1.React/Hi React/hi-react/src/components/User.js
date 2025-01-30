import PropTypes from "prop-types";

function User({name, surname, age, isLoggedIn, friends}){
    return (
        <>
        <h1>
            {isLoggedIn ? `Hello ${name} ${surname}! (age: ${age})` : "Please login."}
        </h1>
        <h2>Friends</h2>
        {friends &&
            friends.map((friend,index)=>
            <div key={friend.id}>{friend.name}</div>
        )
        }
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.number.isRequired,
    friends: PropTypes.array
  };

export default User;