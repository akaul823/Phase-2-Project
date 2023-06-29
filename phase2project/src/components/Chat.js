import Message from "./Message"

function Chat({display, newMessage}) {
const fuckYou = display.map(message => <Message  key={message.chronoID} content={message.content} sent={message.sent}/>)


//console.log(display)
    return(
        <div className="gatorade">

            <ul className="chatDisplay">

                {display.map(message => <Message  key={message.chronoID} content={message.content} sent={message.sent}/>
                )}
            </ul>
            <div className="chatbox">
                <form onSubmit={e=> {e.preventDefault()
                    newMessage(e.target.message.value)
                    e.target.reset()
                    }}>
                    <input type="text" name="message" placeholder="Type"></input>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    );
}

export default Chat