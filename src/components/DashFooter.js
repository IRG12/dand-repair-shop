import React from "react";
import { AiFillHome } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashFooter = () => {
  const { username, status } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => navigate("/dash");

  const content = (
    <footer className="dash-footer">
      {pathname !== "/dash" ? (
        <button
          className="dash-footer__button icon-button"
          title="Home"
          onClick={onGoHomeClicked}
        >
          <AiFillHome className="icon" />
        </button>
      ) : null}
      <p>Current User: {username}</p>
      <p>Status: {status}</p>
    </footer>
  );

  return content;
};

export default DashFooter;
