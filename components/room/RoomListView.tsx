import React from "react"
import ProfileHeader from "~/components/profile/ProfileHeader"
import ProfileSetting from "~/components/profile/ProfileSetting"
import RoomList from "~/components/room/RoomList"

export default function ChatList() {
  return (
    <section className="hidden rounded-md overflow-hidden md:flex flex-col max-h-full min-w-[20vw] border-r border-zinc-600">
      <ProfileHeader></ProfileHeader>
      <hr className="bg-zinc-600 border-zinc-600" />
      <RoomList />
      <ProfileSetting />
    </section>
  )
}
