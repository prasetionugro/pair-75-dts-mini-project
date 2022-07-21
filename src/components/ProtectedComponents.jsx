import React from "react";

import { Navigate } from "react-router-dom";

import { auth } from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

/*
const ProtectedComponents = ({ children }) => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, navigate]);
  if (isLoading) {
    return;
  } else {
    return children;
  }
};
*/

const ProtectedComponents = ({ children, loginOnly = true }) => {
  const [user, isLoading] = useAuthState(auth);
  if (!user && loginOnly) {
    return <Navigate to="/login" />;
  }

  if (user && !loginOnly) {
    return <Navigate to="/" />;
  }

  return isLoading ? <div>Loading...</div> : children;
};

export default ProtectedComponents;
