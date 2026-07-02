import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")
  return (
    <div
      className="w-screen h-screen flex flex-col justify-end items-center pb-12"
      style={{ backgroundColor: color}}
    >
      <div className="bg-black p-4 rounded-3xl flex flex-wrap justify-center">
        <button onClick={() => setColor("olive")} className="text-white bg-olive-600 p-3 rounded-4xl m-3">Olive</button>
        <button onClick={() => setColor("red")} className="text-white bg-red-600 p-3 rounded-4xl m-3">Red</button>
        <button onClick={() => setColor("green")} className="text-white bg-green-600 p-3 rounded-4xl m-3">Green</button>
        <button onClick={() => setColor("blue")} className="text-white bg-blue-600 p-3 rounded-4xl m-3">Blue</button>
        <button onClick={() => setColor("yellow")} className="text-white bg-yellow-600 p-3 rounded-4xl m-3">Yellow</button>
        <button onClick={() => setColor("purple")} className="text-white bg-purple-600 p-3 rounded-4xl m-3">Purple</button>
        <button onClick={() => setColor("gray")} className="text-white bg-neutral-600 p-3 rounded-4xl m-3">Neutral</button>
        <button onClick={() => setColor("orange")} className="text-white bg-orange-600 p-3 rounded-4xl m-3">Orange</button>
      </div>
    </div>
  )
}

export default App