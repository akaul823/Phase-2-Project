import Message from "./Message"

function Chat({display, newMessage}) {
const fuckYou = display.map(message => <Message  key={message.chronoID} content={message.content} sent={message.sent}/>)


//console.log(display)
    return(
        <div className="all-chat">
            <h4 className="gru">Messages</h4>
            <div className="messageDiv">

            <ul className="chatDisplay">

                {display.map(message => <Message  key={message.chronoID} content={message.content} sent={message.sent}/>
                )}
            </ul>
            </div>
            <div className="chatbox">
                <form className="chatForm" onSubmit={e=> {e.preventDefault()
                    newMessage(e.target.message.value)
                    e.target.reset()
                    }}>
                    <input className="textInput" type="text" name="message" placeholder="Type"></input>
                    <input className="submitInput" type="submit"></input>
                </form>
            </div>
        </div>
    );
}

export default Chat