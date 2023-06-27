import User from "./User";

function AccountNav({data}){
    return (
        <nav className="account-container">
            <article>
                {data.map(user=><User user={user} />)}
            </article>
        </nav>
    )
}

export default AccountNav;