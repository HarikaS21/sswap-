import { useState } from "react";
import {
  Smile,
  Paperclip,
  Mic,
  Send,
  Video,
  Phone,
  MoreVertical,
} from "lucide-react";

export default function ChatUI() {
  const conversations = [
    {
      id: 1,
      name: "Alice Johnson",
      lastMsg: "Hey there!",
      time: "10:30 AM",
      img: "/public/images/Johnson.png",
      online: true,
    },
    {
      id: 2,
      name: "Bob Williams",
      lastMsg: "Sent the design",
      time: "Yesterday",
      img: "/public/images/Bob.png",
      online: false,
    },
    {
      id: 3,
      name: "Charlie Brown",
      lastMsg: "Can we reschedule?",
      time: "Mon",
      img: "/public/images/Charlie.png",
      online: true,
    },
    {
      id: 4,
      name: "Diana Prince",
      lastMsg: "Thanks for your feedback!",
      time: "Sun",
      img: "/public/images/Daina.png",
      online: true,
    },
    {
      id: 5,
      name: "Ethan Hunt",
      lastMsg: "New updates are live!",
      time: "Fri",
      img: "/public/images/Ethan.png",
      online: true,
    },
  ];

  // ✅ Track which conversation is active
  const [activeChat, setActiveChat] = useState(conversations[0]);

  // ✅ Example messages
  const messages = [
    {
      id: 1,
      text: "Hey Alice! How’s your project going?",
      sender: "me",
      time: "10:05 AM",
    },
    {
      id: 2,
      text: "Hi! It’s going well, just finished backend.",
      sender: "other",
      time: "10:07 AM",
    },
    {
      id: 3,
      text: "Awesome! Any time for a quick call?",
      sender: "me",
      time: "10:08 AM",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen p-2 md:p-4 gap-4">
      {/* Left Sidebar (Conversations) */}
      <div className="w-full md:w-1/3 lg:w-1/4 border border-gray-300 rounded-xl p-3 flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Conversations</h2>
        <div className="space-y-3 overflow-y-auto scrollbar-hide">
          {conversations.map((c) => (
            <div
              key={c.id}
              onClick={() => setActiveChat(c)} // ✅ set active chat on click
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
                activeChat.id === c.id
                  ? "bg-blue-100 border border-blue-400"
                  : "hover:bg-gray-50"
              }`}
            >
              {/* Profile with online indicator */}
              <div className="relative">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-10 h-10  rounded-full"
                />
                {c.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">{c.name}</h3>
                <p className="text-xs text-gray-500 truncate">{c.lastMsg}</p>
              </div>
              <span className="text-xs text-gray-400">{c.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Chat Area */}
      <div className="flex-1 flex flex-col border border-gray-300 rounded-xl">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-300 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={activeChat.img}
              alt={activeChat.name}
              className="w-10 h-10 rounded-full  "
            />
            <div>
              <h2 className="font-medium">{activeChat.name}</h2>
              <span
                className={`text-xs ${
                  activeChat.online ? "text-green-500" : "text-gray-400"
                }`}
              >
                {activeChat.online ? "Online" : "Offline"}
              </span>
            </div>
          </div>
          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <Video className="cursor-pointer text-gray-600 hover:text-blue-500" />
            <Phone className="cursor-pointer text-gray-600 hover:text-blue-500" />
            <MoreVertical className="cursor-pointer text-gray-600 hover:text-blue-500" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-end gap-2 ${
                m.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              {/* Show avatar for "other" on left */}
              {m.sender === "other" && (
                <img
                  src={activeChat.img}
                  alt={activeChat.name}
                  className="w-8 h-8 rounded-full"
                />
              )}

              {/* Message Bubble */}
              <div
                className={`p-3 rounded-lg border border-gray-300 max-w-xs ${
                  m.sender === "me" ? "bg-blue-100 text-blue-900" : "bg-white"
                }`}
              >
                <p className="text-sm">{m.text}</p>
                <span className="text-xs text-gray-400 block mt-1">
                  {m.time}
                </span>
              </div>

              {/* Show avatar for "me" on right */}
              {m.sender === "me" && (
                <img
                  src="/public/images/A (1).png" // <-- your profile image
                  alt="You"
                  className="w-8 h-8 rounded-full"
                />
              )}
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-gray-300 lg:flex  items-center gap-3">
         <div className="flex items-center gap-3">
           <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Smile size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Paperclip size={20} />
          </button>
           <button className="p-2 md:hidden block  hover:bg-gray-100 rounded-lg">
            <Mic size={20} />
          </button>
         </div>
         <div className="flex gap-2 items-center">
           <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
          />
          <button className="p-2 hidden lg:block  hover:bg-gray-100 rounded-lg">
            <Mic size={20} />
          </button>
           <button className="p-2 lg:hidden bg-blue-500 hover:bg-blue-600 rounded-lg text-white">
            <Send size={20} />
          </button>
         </div>
          <button className="p-2 bg-blue-500 hidden lg:block hover:bg-blue-600 rounded-lg text-white">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
