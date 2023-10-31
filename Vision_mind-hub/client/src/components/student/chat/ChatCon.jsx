import React, { useEffect, useState } from "react";
import './chat.css'
function ChatCon({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-blue-500 py-2 px-4">
        <p className="text-xl text-black font-semibold">Room : {room}</p>
      </div>
      <div className="flex-grow p-4 overflow-y-96">
        {messageList.map((messageContent, index) => (
          <div
            key={index}
            className={`flex ${
              username === messageContent.author ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`${
                username === messageContent.author
                  ? "bg-blue-500"
                  : "bg-gray-200"
              } rounded-lg p-2 max-w-md`}
            >
              <p className="text-sm">{messageContent.message}</p>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <p>{messageContent.time}</p>
                <p>{messageContent.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-4">
        <div className="flex items-center">
          <input
            type="text"
            value={currentMessage}
            placeholder="Hey..."
            className="flex-grow border rounded-lg py-2 px-4 mr-2 focus:outline-none"
            onChange={(event) => setCurrentMessage(event.target.value)}
            onKeyPress={(event) => event.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-black  rounded-lg py-2 px-4"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatCon;




// import React, { useEffect, useState } from "react";

// function ChatCon({ socket, username, room }) {
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [messageList, setMessageList] = useState([]);

//   const sendMessage = async () => {
//     if (currentMessage !== "") {
//       const messageData = {
//         room: room,
//         author: username,
//         message: currentMessage,
//         time:
//           new Date(Date.now()).getHours() +
//           ":" +
//           new Date(Date.now()).getMinutes(),
//       };

//       await socket.emit("send_message", messageData);
//       setMessageList((list) => [...list, messageData]);
//       setCurrentMessage("");
//     }
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageList((list) => [...list, data]);
//     });
//   }, [socket]);

//   return (
//     <div className="chat-window">
//       <div className="chat-header">
//         <p>Live Chat</p>
//       </div>
//       <div className="chat-body">
//           {messageList.map((messageContent) => {
//             return (
//               <div
//                 className="message"
//                 id={username === messageContent.author ? "you" : "other"}
//               >
//                 <div>
//                   <div className="message-content ">
//                     <p>{messageContent.message}</p>
//                   </div>
//                   <div className="message-meta">
//                     <p id="time">{messageContent.time}</p>
//                     <p id="username">{messageContent.author}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//       <div className="chat-footer">
//         <input
//           type="text"
//           value={currentMessage}
//           placeholder="Hey..."
//           onChange={(event) => {
//             setCurrentMessage(event.target.value);
//           }}
//           onKeyPress={(event) => {
//             event.key === "Enter" && sendMessage();
//           }}
//         />
//         <button onClick={sendMessage}>&#9658;</button>
//       </div>
//     </div>
//   );
// }

// export default ChatCon;