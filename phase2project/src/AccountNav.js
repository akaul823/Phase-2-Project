import User from "./User";

function AccountNav(){
    return (
        <nav className="account-container">
            <div>
                <strong>
                 Accounts
                </strong>
                <ul className="account-list">
                    <li>
                    <User />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AccountNav;