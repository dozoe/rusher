import React from 'react'

export default function Chat() {
  return (
    <div className="flex gap-4 p-4">
      <img
        src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
        className="bg-slate-400 rounded-[50%] cursor-pointer w-10 h-10 max-w-10 max-h-10"
        width={40}
        height={40}
        alt={`${"@xxxxxx"} profile avatar`}
      ></img>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold">{"username"}</span>
        <p className="p-2 bg-zinc-500 rounded-md">{'Et nisi cupidatat velit aute. Commodo officia mollit ipsum Lorem deserunt et anim exercitation ut consectetur. Excepteur amet id nisi exercitation do amet anim et minim cupidatat nostrud eu reprehenderit. Deserunt incididunt minim duis irure magna quis id ut reprehenderit nulla velit minim est duis.Culpa ea aute ullamco commodo qui ipsum laboris id. Irure laborum ex aliqua Lorem. Cillum eu anim esse eu Lorem aliquip laboris qui irure excepteur laboris esse. Ea commodo do eiusmod qui sunt mollit minim. Ut ea aliqua exercitation voluptate voluptate eu minim velit consequat sint pariatur exercitation fugiat dolor.'}</p>
      </div>
    </div>
  )
}
