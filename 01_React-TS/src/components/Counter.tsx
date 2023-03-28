import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementar = (numero: number = 0): void => {
    setCounter(counter + numero);
  };

  return (
    <div className="mt-5">
      <h2>Use State</h2>
      <h3>Couter: {counter}</h3>

      <button className="btn btn-success" onClick={() => incrementar(1)}>
        +1
      </button>
      <button className="btn btn-danger m-2" onClick={() => incrementar(2)}>
        +2
      </button>
      <button
        className="btn btn-warning"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
