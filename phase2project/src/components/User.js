import React from 'react'
import './user.css'
function User({name, setUser, setAccount, nav, eventHandler, myID}) {

    const [isSelected, setIsSelected] = React.useState(false)
    if (nav === "accountList") {
        return(
<<<<<<< HEAD
            <nav className={isSelected ? "selected":"not-selected"} identifier={myID} onClick={e=>{eventHandler(myID, nav)
            setIsSelected(selected => !selected)}}>
                <p class="nav-item active">{name}</p>
            </nav>
=======
            <div className={isSelected ? "selected":"not-selected"} identifier={myID} onClick={e=>{eventHandler(myID, nav)
            setIsSelected(selected => !selected)}}>
                <p>{name}</p>
            </div>
>>>>>>> pulledChris
        );
    }
    if (nav === "userList") {
        return(
<<<<<<< HEAD
            <nav className={isSelected ? "selected":"not-selected"} identifier={myID} onClick={e=>{eventHandler(myID, nav)
                setIsSelected(selected => !selected)}}>
                <p>{name}</p>
            </nav>
=======
            <div className={isSelected ? "selected":"not-selected"} identifier={myID} onClick={e=>{eventHandler(myID, nav)
                setIsSelected(selected => !selected)}}>
                <p>{name}</p>
            </div>
>>>>>>> pulledChris
        );
    }
}

export default User