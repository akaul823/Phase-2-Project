function NewContactForm(){
    return(
        <form className="new-contact-form">
            <p>Contact</p>
            <label>
                Name
                <input type="text" name="text" />
                Number
                <input type="text" name="text" />
                Address
                <input type="text" name="text" />
                Photo
                <input type="text" name="text" />
            </label>

            <input type="submit" value="Add Contact" />
        </form>
    )
}


export default NewContactForm;