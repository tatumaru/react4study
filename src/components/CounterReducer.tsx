import { useReducer } from 'react';

type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET';

type CounterProps = {
  initialValue: number;
};

const Counter = (props: CounterProps) => {
  const { initialValue } = props;

  const reducer = (currentCount: number, action: Action) => {
    switch (action) {
      case 'INCREMENT':
        return currentCount + 1;
      case 'DECREMENT':
        return currentCount - 1;
      case 'DOUBLE':
        return currentCount * 2;
      case 'RESET':
        return initialValue;
      default:
        return currentCount;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch('DECREMENT')}>-</button>
      <button onClick={() => dispatch('INCREMENT')}> + </button>
      <button onClick={() => dispatch('DOUBLE')}> *2 </button>
      <button onClick={() => dispatch('RESET')}> RESET </button>
    </div>
  );
};

export default Counter;
