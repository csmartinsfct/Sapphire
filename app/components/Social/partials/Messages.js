import React from 'react';

import Message from './Message';

class Messages extends React.Component {
  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    // Loop through all the messages in the state and create a Packet component
    const messages = this.props.messages.map((message, i) => {
      console.log(message)
      return (
        <Message
          key={i}
          username={message.owner.display_name}
          message={message.content}
          fromMe={message.fromMe} />
      );
    });

    return (
      <div className='messages' id='messageList'>
        { messages }
      </div>
    );
  }
}

Messages.defaultProps = {
  messages: []
};

export default Messages;
