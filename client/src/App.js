import React, { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
import { Routes, Route, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";
import ProfilePage from "./pages/profilePage";
import MyLinkPage from "./pages/myLink";
import EditLink from "./pages/editLink";
import Preview from "./pages/previewLink";

import { API, setAuthToken } from "./config/API";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (!state.isLogin) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;

      return dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />;
      <Route exact path="/home" element={<HomePage />} />
      <Route exact path="/profile" element={<ProfilePage />} />
      <Route exact path="/my-link" element={<MyLinkPage />} />
      <Route exact path="/edit-link/:id" element={<EditLink />} />
      <Route exact path="/preview/:id" element={<Preview />} />
    </Routes>
  );
}

export default App;
