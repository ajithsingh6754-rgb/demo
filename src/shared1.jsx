import React from 'react'
import { useContext } from 'react';
import { Todocontext } from './context/Todocontext';

const Shared1 = () => {
    const {arr}=useContext(Todocontext);
  return (
    <div>
        {arr.map((e) => <>
            <div >{e}</div>
            </>
        )}
    </div>
  )
}

export default Shared1