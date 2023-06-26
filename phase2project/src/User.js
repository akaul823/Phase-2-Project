function User(){
    return (
        <div className="user-card">
            <img src={"profile.jpg"} alt={"name"} className="user-image" />
            <div className="user-info" style={{borderRadius:"5px", padding: "1rem"}}>
                <p className="user-name" style={{backgroundColor:"yellow",borderRadius:"5px",padding:"1rem"}}>Avi Kaul</p>
                <p className='user-number'>Number</p>
                <p className='user-address'>Address</p>
            </div>
            <button>Edit Contact</button>
            <div className="likes">
                <img src={"logo512.png"} alt="like" style={{width:"32px",height:"32px",verticalAlign:"middle"}} />
                <span style={{fontSize:"24px"}}>likes</span>
            </div>
        </div>
    )
}
export default User;