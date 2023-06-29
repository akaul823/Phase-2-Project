import User from "./User"


function Nav ({list, nav, setUser, setAccount, eventHandler}) {

    
    if (nav === "userList") {
        return(
            <div className="userList">
                <strong>Users</strong>
                <ul>
                {list.map(item => <User name={item.name} key={item.id} myID={item.id} setUser={setUser} nav={nav} eventHandler={eventHandler}/>)}
                </ul>
            </div>
        );
    }
    if (nav === "accountList") {
        return(
            <div className="accountList">
                <strong>Accounts</strong>
                <ul>
                {list.map(item => <User name={item.name} key={item.id} myID={item.id} setAccount={setAccount} nav={nav} eventHandler={eventHandler}/>)}
                </ul>
            </div>
        );
    }
}

export default Nav