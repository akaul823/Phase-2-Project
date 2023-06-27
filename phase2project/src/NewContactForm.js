function NewContactForm(){
    return(
        <form className="new-contact-form">
            <b>Contact Form</b>
            <div>
                Name
                <input type="text" name="text" placeholder="Name" />
                Number
                <input type="text" name="text" placeholder="(xxx)-xxx-xxxx" />
                Address
                <input type="text" name="text" placeholder="Address" />
                Photo
                <input type="text" name="text" placeholder="Profile Picture" />
            </div>

            <input type="submit" value="Add Contact" />
        </form>
    )
}


export default NewContactForm;