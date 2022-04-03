import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { startChecking } from '../actions/auth';
import Spinner from '../components/UI/Spinner';

const AuthLayout = () => {
  const dispatch = useDispatch();
  const { checking } = useSelector( state => state.auth);
  useEffect(() => { 
    dispatch( startChecking() );   
  }, [dispatch])
  if (checking) {
    return <Spinner />
  }else{
    return (
      <div className="bg-light">
        <Outlet />
      </div>
    )
  }
  
}

export default AuthLayout