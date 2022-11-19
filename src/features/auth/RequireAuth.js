// This is to protect our routes

import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ allowRoles }) => {
  const location = useLocation();
  const { roles } = useAuth();

  // some() --> if this is true, at least once, it will return true
  const content = roles.some((role) => allowRoles.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );

  return content;
};

export default RequireAuth;
