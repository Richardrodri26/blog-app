import React from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { blogdata } from "./blogdata";

const AuthContext = React.createContext();

const adminList = ["Richard", "Laura", "Luis"];

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = React.useState(null);
  const [data, setData] = React.useState(blogdata);


  const login = ({ username, genero }) => {
    let from = location.state?.from?.pathname || -1;
    const isAdmin = adminList.find((admin) => admin === username);
    setUser({ username, isAdmin, genero });
    navigate(from, { replace: true });
  };

  const logout = () => {
    setUser(null);
    setData(blogdata);
    navigate("/");
  };

  const deletePost = (id) => {
    const filterData = data.filter((post) => post.id !== id);
    setData(filterData);
    return data;
  };
  const auth = {
    user,
    login,
    logout,
    data,
    deletePost
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

function AuthRoute(props) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
}

export { AuthProvider, useAuth, AuthRoute };
