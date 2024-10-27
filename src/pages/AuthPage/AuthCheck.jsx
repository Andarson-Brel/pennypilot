import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentToken } from "../../features/auth/authSlice";

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../../app/store";
import { jwtDecode } from "jwt-decode";

const AuthCheck = () => {
  const navigate = useNavigate();
  const userTkn = useSelector(selectCurrentToken);
  // const tc_name = getFormattedToken(userTkn)
  const decodedTkn = jwtDecode(userTkn);
  const { tc_name } = decodedTkn;

  useEffect(() => {
    if (userTkn) {
      const lastRoute = localStorage.getItem("lastRoute");
      if (lastRoute && lastRoute !== "/") {
        navigate(lastRoute);
      } else {
        navigate(`/m_e_officer/analytics/${tc_name}`);
      }
    }
  }, [userTkn, navigate, tc_name]);

  return null;
};

const AuthCheckWrapper = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <AuthCheck />
    </PersistGate>
  );
};

export default AuthCheckWrapper;
