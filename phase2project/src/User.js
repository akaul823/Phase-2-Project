function User(){
    return (
        <div className="user">
            <img src={"profile.jpg"} alt={"name"} className="user-image" />
            <p className="user-name"> Name: Avi Kaul</p>
            <p className='user-number'> Number: </p>
            <p className='user-address'> Address: </p>
            <button>Edit Contact</button>
        </div>
    )
}
export default User;