<<<<<<< HEAD
import React from 'react';
import Message from './Message';

function Chat({ display, newMessage }) {
  const chatMessages = display.map((message) => (
    <Message key={message.chronoID} content={message.content} sent={message.sent} />
  ));

  return (
    <div className="chat">
      <div className="card">
        <ul className="list-group list-group-flush">
          {chatMessages}
        </ul>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        newMessage(e.target.message.value);
      }}>
        <div className="input-group">
          <input type="text" name="message" className="form-control" placeholder="Type your message..." />
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
}

export default Chat;
=======
import Message from "./Message"

function Chat({display, newMessage}) {
const fuckYou = display.map(message => <Message  key={message.chronoID} content={message.content} sent={message.sent}/>)


//console.log(display)
    return(
        <div className="chat">
            <ul>
                {display.map(message => <Message  key={message.chronoID} content={message.content} sent={message.sent}/>
                )}
            </ul>
            <form onSubmit={e=> {e.preventDefault()
                newMessage(e.target.message.value)}}>
                <input type="text" name="message"></input>
                <input type="submit"></input>
            </form>
        </div>
    );
}

export default Chat
>>>>>>> pulledChris
