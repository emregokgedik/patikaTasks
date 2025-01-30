import PropTypes from "prop-types";

function User({name, surname, age, isLoggedIn, friends, address}){
    return (
        <>
<h1>
            {isLoggedIn ? 
                `Hello ${name} ${surname}! (age: ${age})` 
                : "Please login."
            }
            <br />
            {isLoggedIn && 
                `Address: ${address.title} ${address.zip}.`
            }
            
        </h1>
        <h2>Friends</h2>
        {isLoggedIn && friends &&
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
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
  };

export default User;