import React from "react"

export default function RoomList() {
  return (
    <ul className="flex flex-col overflow-y-scroll">
      {Array(20)
        .fill({})
        .map((item, index) => (
          <li key={index} className="p-4 py-6 border-b border-zinc-600">
            sadasd
          </li>
        ))}
    </ul>
  )
}
