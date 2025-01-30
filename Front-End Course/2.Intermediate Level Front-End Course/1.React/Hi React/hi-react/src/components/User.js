import PropTypes from "prop-types";

function User({name, surname, age, isLoggedIn, friends, address}){

    if (!isLoggedIn){
        return <div>Please login</div>
    }
    return (
        <>
<h1>
            { 
                `Hello ${name} ${surname}! (age: ${age})` 
            }
            <br />
            {
                `Address: ${address.title} ${address.zip}.`
            }
            
        </h1>
        {
            <>
        <h2>Friends</h2>
        {friends && 
            friends.map((friend, index) =>
                <div key={friend.id}>{friend.name}</div>
            )
        }
            </>
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

  User.defaultProps = {
    isLoggedIn: false
  }

export default User;