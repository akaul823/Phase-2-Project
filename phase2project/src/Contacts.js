import NewContactForm from "./NewContactForm";
function Contacts(){
    return (
        <div className= "contacts-container">
            <nav className="contact-list">
                <strong>
                    Contacts
                </strong>
                <div className="contact-form">
                <NewContactForm />
                </div>
            </nav>
        </div>
    )
}

export default Contacts;