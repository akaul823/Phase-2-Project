import User from "./User";
function AccountNav(){
    return (
        <nav className="account-list">
            <label>
                Accounts
                <User />
            </label>
        </nav>
    )
}

export default AccountNav;