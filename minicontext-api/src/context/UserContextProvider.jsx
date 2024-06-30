import React from "react";
import UserContext from "../UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider


// context major cheejh provide karega {Provider}

// context ko global variable mano
