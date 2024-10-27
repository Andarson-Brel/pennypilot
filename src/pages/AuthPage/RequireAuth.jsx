import { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./../features/auth/authSlice";

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      localStorage.setItem("lastRoute", location.pathname);
    }
  }, [token, location]);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default RequireAuth;
