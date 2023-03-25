import React from "react"
import ChatMessage from "~/components/room/ChatMessage"
export default function InRoomChatList() {
  return (
    <ol className="w-full overflow-y-scroll mt-4">
      {Array(20).fill({}).map((chat, index) => (
        <li key={index}>
          <ChatMessage {...chat} />
        </li>
      ))}
    </ol>
  )
}
