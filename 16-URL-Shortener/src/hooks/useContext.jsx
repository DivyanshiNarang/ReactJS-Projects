import { createContext, useContext, useState } from "react";

export const CustomContext = createContext();

export const CustomProvider = ({children}) =>{
    const [data, setData] = useState(null);
    return (
        <CustomContext value={{data, setData}}>
            {children}
        </CustomContext>
    )
}

export const useCustomContext =()=>{
    const context = useContext(CustomContext);

    if(context===undefined){
        throw Error('context must be used within its provider');
    }

    return context
}



