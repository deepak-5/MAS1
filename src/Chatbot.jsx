import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatMessage from './ChatMessage';
import './Chatbot.css'
import NavBar from "./NavBar";

const API_URL = 'https://api.openai.com/v1/chat/completions';

const Chatbot = () => {
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState('');
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_API_KEY);
  const [model, setModel] = useState('gpt-3.5-turbo');

  useEffect(() => {
    setConversation([{ text: 'Hello! How can I help you today?', sender: 'bot' }]);
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send message to OpenAI API
    try {
      const response = await axios.post(
        API_URL,
        {
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: message },
          ],
          model: model,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      // Update conversation state with user's message
      setConversation((prevConversation) => [
        ...prevConversation,
        { text: message, sender: 'user' },
      ]);

      // Update conversation state with bot's response
      setConversation((prevConversation) => [
        ...prevConversation,
        {
          text: response.data.choices[0].message.content,
          sender: 'bot',
        },
      ]);
    } catch (err) {
      console.error(err);
    }

    // Clear input field
    setMessage('');
  };

  return (
    <div><NavBar/>
    <div className="chatbot-container">
      <div className="conversation-container">
        {conversation.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}
      </div>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your message"
            value={message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Chatbot;
