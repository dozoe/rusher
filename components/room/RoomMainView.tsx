import React from 'react'
import InRoomChatList from '~/components/room/InRoomChatList'
import ChatAction from '~/components/room/ChatAction'

export default function RoomMain() {
  return (
    <section className="flex flex-col min-w-[30vw] flex-grow">
        <InRoomChatList />
        <ChatAction />
    </section>
  )
}
