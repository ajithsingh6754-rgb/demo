import React, { useContext } from 'react';
import { TodoContext } from './context/Todocontext.jsx';

const Shared2 = () => {
  const { setArr } = useContext(TodoContext);

  return (
    <div>
      <button onClick={() => setArr(["changed", "changed1"])}>Change</button>
    </div>
  );
};

export default Shared2;