import React from 'react';
import PropTypes from 'prop-types';

const ChatMessage = ({ message }) => {
  const { text, sender } = message;
  const isUserMessage = sender === 'user';
  const messageClass = isUserMessage ? 'user-message' : 'chatbot-message';

  return (
    <div className={`message ${messageClass}`}>
      <div className="message-bubble">
        <p className="message-text">{text}</p>
      </div>
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatMessage;
