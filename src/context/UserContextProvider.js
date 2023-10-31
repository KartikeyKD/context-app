import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider =({children})=>{
    const [login,setLogin] = useState('Login')
    const [value,setValue] = useState('')
    const [amount,setAmount] = useState(0)
return(
    <UserContext.Provider value={{login,setLogin,value,setValue,amount,setAmount}}>
    {children}
    </UserContext.Provider>
)
}

export default UserContextProvider;