
function Messenger(){
    return(
        <div className="message-container">
            <strong>
                Message
            </strong>
            <div className="message-display">
                <div className="message-content">
                    Render Messages
                </div>
                <div className="send-message">
                    <div>
                        <input placeholder="Send a message"></input>
                        <button>Send </button>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default Messenger;