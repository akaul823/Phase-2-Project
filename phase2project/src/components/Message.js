<<<<<<< HEAD
function Message({ content, sent }) {
    return (
      <li className={`list-group-item${sent ? ' text-right' : ''}`}>
        <div className={`message${sent ? ' sent' : ''}`}>
          <p>{content}</p>
        </div>
      </li>
    );
  }
  
  export default Message;
=======


function Message ({content, sent}) {


    return(
        <li>
            <p>{content}</p>
        </li>
    )
}
export default Message
>>>>>>> pulledChris
