import React, { createContext, useState } from 'react'
export const SampleContext = createContext();
const SampleContextProvider = (props) => {
    const [bool, setbool] = useState(false)
    return (
         <SampleContext.Provider 
            value={{
                bool,
                setbool
             }}>
               {props.children}
         </SampleContext.Provider>
    )
}
export default SampleContextProvider