import React from "react";
function Form({addUser}){
    const [userContact, setUserContact]= React.useState({
        name:""
    })

    function handleFormData(e){
        setUserContact({
            ...userContact, [e.target.name]:e.target.value  
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        addUser(userContact)
    }

    return(
        <div className="form">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
          <input onChange={handleFormData} type="text" name="name" placeholder="Contact Name" />
          <button type="submit">Add Contact</button>
        </form>
      </div>
    )
}
export default Form;