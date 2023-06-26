function User(){
    return (
        <div className="user" style={{}}>
            <img src={"profile.jpg"} alt={"name"} className="user-image" />
            <p className="user-name" style={{backgroundColor:"red",borderRadius:"5px",padding:"1rem"}}>Avi Kaul</p>
            <p className='user-description'>Coding wiz!</p>
            <button>Edit Contact</button>
            <div className="likes">
                <img src={"logo512.png"} alt="like" style={{width:"32px",height:"32px",verticalAlign:"middle"}} />
                <span style={{fontSize:"24px"}}>likes</span>
            </div>
        </div>


    )
}
export default User;