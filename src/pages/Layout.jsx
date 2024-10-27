import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthCheck from './AuthCheck';

const Layout = () => {
  return (
    <>
      <AuthCheck />
      <Outlet />
    </>
  );
};

export default Layout;