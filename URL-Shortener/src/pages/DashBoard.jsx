import { AuthContext } from '@/hooks/context.jsx'
import { useCustomContext } from '@/hooks/useContext';
import React, { useContext, useEffect } from 'react'

const DashBoard = () => {
    const {authData} = useContext(AuthContext);
    const {data, setData}= useCustomContext();
useEffect(()=>{
    setData((prev)=>({...prev, name: 'abc'}))
}, [])
    console.log(authData, data)
    return (
        <div>
            Dashboard
        </div>
    )
}

export default DashBoard
