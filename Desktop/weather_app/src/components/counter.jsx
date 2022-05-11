import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const getMultiply = () => {
    if (counter % 5 === 0) {
      return <h1>Es múltiplo de CINCO</h1>;
    } else if (counter % 3 === 0) {
      return <h1>Es múltiplo de TRES</h1>;
    } else if (counter % 2 === 0) {
      return <h1>Es múltiplo de DOS</h1>;
    } else {
      return <h1>No es múltiplo de DOS, TRES ni CINCO</h1>;
    }
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      {/* {
                counter % 5 === 0 ? (
                    <>
                        <h1>Es múltiplo de CINCO</h1>
                    </>
                ) : (
                    counter % 3 === 0 ? (
                        <h1>Es múltiplo de TRES</h1>
                    ) : (
                        counter % 2 === 0 ? (
                            <h1>Es múltiplo de DOS</h1>
                        ) : (
                            <h1>No es múltiplo de DOS, TRES ni CINCO</h1>
                        )
                    ) 
                )
            } */}
      {getMultiply()}
    </div>
  );
};

export default Counter;