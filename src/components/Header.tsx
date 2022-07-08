import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "../constants";

const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <div>
      <Link to="/">Hacker News</Link>
      <Link to="/">new</Link>
      <Link to="/create">Submit</Link>
      <div>
        {authToken ? (
          <>
            <div
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                navigate("/");
              }}
            >
              logout
            </div>
          </>
        ) : (
          <>
            <Link to="/login">login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
