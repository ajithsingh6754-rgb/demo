import React from 'react'
import { useContext } from 'react';
import { Todocontext } from './context/Todocontext';
const Shared2 = () => {
    const {setArr}=useContext(Todocontext);
  return (
    <div>
      <button onClick={()=>setArr(["changed","changed1"])}>change</button>
    </div>
  )
}

export default Shared2