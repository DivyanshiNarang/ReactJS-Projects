import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  function handleBack() {
    setCount((c) => c - step);
  }

  function handleForward() {
    setCount((c) => c + step);
  }

  return (
    <div>
      <div className="buttons">
        <button onClick={() => setStep((s) => s - 1)}>&ndash;</button>
        Steps: {step}{" "}
        <button onClick={() => setStep((s) => s + 1)}>&ndash;</button>
      </div>
      <div className="buttons">
        <button onClick={handleBack}>&ndash;</button>
        Count: {count}
        <button onClick={handleForward}>&ndash;</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span className="date">{date.toDateString()}</span>
      </p>
    </div>
  );
}
