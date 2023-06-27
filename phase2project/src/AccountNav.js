import User from "./User";

function AccountNav(){
    return (
        <div className="account-container">
            <nav className="account-list">
                <strong>
                 Accounts
                </strong>
                <User />
        </nav>
        </div>
    )
}

export default AccountNav;