

import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../features/auth/authSlice'
import { Navigate, Outlet } from 'react-router-dom'

export const Authorized = ({ user, redirect = "/auth"}) => {
  const dispatch = useDispatch()
  const accessToken = user?.access

  const currentDate = useMemo(() => new Date(), []);

  useEffect(() => {
    if (accessToken) {
        const decode_token = jwtDecode(accessToken);
        if(decode_token.exp * 1000 < currentDate.getTime()) {
            dispatch(logOut());
        }
    }
  },[accessToken, dispatch, currentDate]);

  if(!accessToken) {
    return <Navigate to={redirect} replace/>;
  }

  return < Outlet />
}


