import React from "react";
function Form(){
    const [userContact, setUserContact]= React.useState({
        name:""
    })

    function handleFormData(e){
        setUserContact({
            ...userContact, [e.target.name]:e.target.value  
        })
    }
    // function handleSubmit(e){
    //     e.preventDefault()
    //     addContact(userContact)
    // }
    return(
        console.log("hi")
    )
}
export default Form;