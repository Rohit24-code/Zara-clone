import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'

function PrivateRoute({children}) {
    const{loggedin} = useContext(AuthContext)

    if(loggedin.length===0){
        alert("Please Login In First")
        return <Navigate to="/login"/>
    }
  return children
}

export default PrivateRoute
