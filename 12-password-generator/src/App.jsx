import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(0);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (characters) str += "!@#$%^&*:><?_~";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, number, characters, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, length, number, characters]);

  const copyClipboard = useCallback(() => {
    // optional operator so that if password is empty then undefined will not be returned
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-blue-600 bg-slate-200">
        <h1 className="text-blue-600 text-center mb-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-4 justify-center">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={0}
              max={20}
              value={length}
              id="length"
              className="cursor-pointer"
              // has to pass event so can use setLength method
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              className="cursor-pointer"
              id="numberInput"
              onChange={() => setNumber((num) => !num)}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characters}
              className="cursor-pointer"
              id="characterInput"
              onChange={() => setCharacters((char) => !char)}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
