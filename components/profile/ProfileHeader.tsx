import React from "react"

import Image from "next/image"
export default function ProfileHeader() {
  return (
    <div className="flex gap-4 p-4">
      <img
        src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
        className="bg-slate-400 rounded-[50%] cursor-pointer w-10 h-10
         min-w-10 min-h-10"
        width={40}
        height={40}
        alt={`${"@xxxxxx"} profile avatar`}
      ></img>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold">{"username"}</span>
        <span className="text-xs">{"status"}</span>
      </div>
    </div>
  )
}
