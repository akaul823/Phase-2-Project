import NewContactForm from "./NewContactForm";
import Usermap from "./Usermap";

function Contacts({data}){
    console.log(data);
    return (
        <div className= "contacts-container">
            <nav className="contact-list">
                <article className="test">
                    {data.map((contact)=>{<Usermap contact={contact} />})}
                </article>
                
            </nav>
        </div>
    )
}

export default Contacts;