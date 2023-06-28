import React from 'react'
import './user.css'
function User({name, setUser, setAccount, nav, eventHandler, myID}) {

    const [isSelected, setIsSelected] = React.useState(false)
    if (nav === "accountList") {
        return(
            <nav className={isSelected ? "selected":"not-selected"} identifier={myID} onClick={e=>{eventHandler(myID, nav)
            setIsSelected(selected => !selected)}}>
                <p class="nav-item active">{name}</p>
            </nav>
        );
    }
    if (nav === "userList") {
        return(
            <nav className={isSelected ? "selected":"not-selected"} identifier={myID} onClick={e=>{eventHandler(myID, nav)
                setIsSelected(selected => !selected)}}>
                <p>{name}</p>
            </nav>
        );
    }
}

export default User