import { useState } from "react";

const colors = ["red", "green", "blue", "pink", "yellow", "lavender", "orange"];

function App() {
  const [color, setColor] = useState("grey");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* fixed position of bar */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        {/* making bar */}
        <div className="flex flex-wrap justify-center gap-3 shadow-md bg-white px-3 py-2 rounded-2xl">
          {colors.map((col, index) => (
            <button
              className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: col }}
              key={index}
              onClick={() => setColor(col)}
            >
              {col}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
