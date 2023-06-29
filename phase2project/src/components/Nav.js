import User from "./User"


function Nav ({list, nav, setUser, setAccount, eventHandler}) {

    
    if (nav === "userList") {
        return(
            <div className="userList">
                <h2 className="userHeader">Recepient</h2>
                <ul className="avi">
                {list.map(item => <User name={item.name} key={item.id} myID={item.id} setUser={setUser} nav={nav} eventHandler={eventHandler}/>)}
                </ul>
            </div>
        );
    }
    if (nav === "accountList") {
        return(
            <div className="accountList">
                <h2 className="userHeader">Accounts</h2>
                <ul className="account-items">
                {list.map(item => <User name={item.name} key={item.id} myID={item.id} setAccount={setAccount} nav={nav} eventHandler={eventHandler}/>)}
                </ul>
            </div>
        );
    }
}

export default Nav