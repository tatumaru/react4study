import { useState } from 'react';

type CounterProps = {
  initialValue: number;
};

const Counter = (props: CounterProps) => {
  const { initialValue } = props;

  const [count, setCount] = useState<number>(initialValue);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount((prevCount: number) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
