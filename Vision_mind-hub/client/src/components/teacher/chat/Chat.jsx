import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

import ChatCon from './ChatCon';

function Chat({user}) {
  const username = user.username
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  useEffect(() => {
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('chat history', (history) => {
      setMessages(history);
    });
  }, []);

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      socket.emit('chat message', messageInput);
      setMessageInput('');
    }
  };

  return (
    <div>
      {!showChat ? (
        <div className="h-auto ml-3 rounded p-4 bg-gray-800 text-white">
          <h3 className='px-4 py-2 bg-blue-500 text-white rounded-md'>Join A Chat</h3>
          <input
            type="text"
            placeholder="Room name..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join Room</button>
        </div>
      ) : (
        <ChatCon socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Chat;
