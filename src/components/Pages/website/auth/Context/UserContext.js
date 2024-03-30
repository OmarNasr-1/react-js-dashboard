//context is instade of local storage and it is more secure and useful than localstorage 

import { createContext, useState } from "react";
export const User = createContext({});
export default function UserProvider({children}){
 const [auth,setAuth]=useState({});
    return(
         < User.Provider value={{auth , setAuth}}>{children} </User.Provider> 
    )
}