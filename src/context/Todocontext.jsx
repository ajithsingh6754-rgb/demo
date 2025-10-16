import { createContext } from "react";

export const Todocontext=createContext();

export const Todoprovider=({children})=>{
    const [arr,setArr]=useState(["Apple","Banana"]);
    return(
        <Todocontext.Provider value={{arr,setArr}}>
            {children}
        </Todocontext.Provider>
    )
}