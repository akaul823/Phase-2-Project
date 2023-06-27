import User from "./User";

function AccountNav({data}){
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