import React from "react"
import RoomListView from "~/components/room/RoomListView"
import RoomMainView from "~/components/room/RoomMainView"

export default function Chat() {
  return (
    <div className="md:p-4 h-screen md:h-[80vh] mx-auto flex max-w-[1100px] w-full">
      <main
        className="
      flex flex-row border flex-grow border-zinc-600 rounded-lg bg-zinc-800
      w-full h-full
      "
      >
        <RoomListView />
        <RoomMainView />
      </main>
    </div>
  )
}
