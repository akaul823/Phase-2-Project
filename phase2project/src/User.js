function User({user}){
    return (
        <div className="user">
            <img src={"profile.jpg"} alt={user.name} className="user-image" />
            <p className="user-name"> Name: {user.name}</p>
            <p className='user-number'> Number: </p>
            <p className='user-address'> Address: </p>
            <button>Edit Contact</button>
        </div>
    )
}
export default User;