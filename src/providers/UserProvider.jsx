import React, { createContext } from 'react'

export const UserContext = createContext({})

export const UserProvider = (props) => {
    const { children } = props
    const v = 'context-xxx'
    return <UserContext.Provider value={{ v }}>{children}</UserContext.Provider>
}
