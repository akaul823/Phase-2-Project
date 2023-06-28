import User from "./User"


function Nav ({list, nav, setUser, setAccount, eventHandler}) {

    
    if (nav === "userList") {
        return(
            <nav className="userList">
                <ul>
                {list.map(item => <User name={item.name} key={item.id} myID={item.id} setUser={setUser} nav={nav} eventHandler={eventHandler}/>)}
                </ul>
            </nav>
        );
    }
    if (nav === "accountList") {
        return(
            <nav className="accountList">
                <ul>
                {list.map(item => <User name={item.name} key={item.id} myID={item.id} setAccount={setAccount} nav={nav} eventHandler={eventHandler}/>)}
                </ul>
            </nav>
        );
    }
}

export default Nav