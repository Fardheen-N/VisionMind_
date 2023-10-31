// pages/index.js
import React, { useState } from 'react';
import axios from 'axios';
import Home from '../Home';
const obj = require('lodash');

const Chat = ({topic}) => {
  const [inputMessage, setInputMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== '') {
    //   const response = await sendMessageToChatbot(inputMessage);
      axios.post(`/api/download/bot?question=${inputMessage}`)
        .then(response => {
            setChatHistory([...chatHistory, { text: inputMessage, isUser: true }]);
            setChatHistory([...chatHistory, { text: response.data, isUser: false }]);
        })
        .catch(error => {
          console.error('Error connecting to AI:', error);
        });
      setInputMessage('');
    }
  };

  return (
    <div className=" h-auto ml-3 rounded p-4 bg-gray-800 text-white">
      {obj.isEmpty(chatHistory)&&(
        <p className='q'>Any doubt ask me..</p>
      )}  
      {!obj.isEmpty(chatHistory)&&(
        <div className="chat-box text-white bg-gray-600 p-2 m-2 rounded overflow-y-scroll border max-h-96">
            <div className="space-y-4">
                {chatHistory.map((chat, index) => (
                <div
                    key={index}
                    className={`${
                    chat.isUser ? 'text-right' : 'text-left'
                    } ${
                    chat.isUser ? 'text-blue-500' : 'bg-gray-800 p-2 rounded-md'
                    }`}
                >
                    {chat.text}
                </div>
                ))}
            </div> 
        </div>
      )}
      
      <div className="mt-4 flex space-x-2">
        <input
          type="text"
          className="q-button bg-gray-600"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="q-button"
        >
          Send
        </button>
      </div>
      <div className="sideBar">
            {topic!=''&&(<Home topic={topic} className='quiz w-20 pt-5'/>)}
        </div>
    </div>
  );
};

export default Chat;
//flex-grow px-2 py-1 bg-gray-800 border border-gray-700 rounded-md text-whit
//px-4 py-2 bg-blue-500 text-white rounded-md