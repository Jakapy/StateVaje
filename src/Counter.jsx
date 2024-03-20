import { useState } from "react";
import { useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementCount, setIncrementCount] = useState(0);

  useEffect(() => {
    document.title = "Kliknil si me ${count}−krat";
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + incrementCount)}>
        Kliknil si me {count}−krat.
      </button>

      <button onClick={() => setIncrementCount(incrementCount + 1)}>
        1 klik ima vrednost {incrementCount}-klikov
      </button>
    </>
  );
}
