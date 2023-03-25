import React from "react"

export default function ChatAction() {
  return (
    <div className="flex gap-3 border-t border-zinc-600 w-full py-2 px-4 items-center">
      <ol className="flex gap-2">
        <li>
          <button className="hover:opacity-70 transition-all p-2 bg-zinc-600 text-zinc-200 w-6 h-6 rounded-[50%] flex items-center justify-center">
            +
          </button>
        </li>

        <li>
          <button className="hover:opacity-70 transition-all p-2 bg-zinc-600 text-zinc-200 w-6 h-6 rounded-[50%] flex items-center justify-center">
            -
          </button>
        </li>
      </ol>
      <div className="rounded-lg bg-zinc-600 py-2 px-4 flex-grow">
        <input
          type="text"
          className="text-zinc-50 bg-transparent w-full max-w-full focus:outline-none"
        />
      </div>
      <button className="min-w-[100px] hover:opacity-70 transition-all p-2 md:min-w-[100px] bg-green-600 whitespace-nowrap text-zinc-200 rounded-md flex items-center justify-center">
        send
      </button>
    </div>
  )
}
