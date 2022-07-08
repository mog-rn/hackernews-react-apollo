import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
    name: "",
  });

  return (
    <div>
      {formState.login ? "Login" : "Sign Up"}
      <div>
        {!formState.login && (
          <>
            <input
              type="text"
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              placeholder="Your name"
            />
            <input
              type="text"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              placeholder="Your email address"
            />
            <input
              type="password"
              value={formState.password}
              onChange={(e) =>
                setFormState({ ...formState, password: e.target.value })
              }
              placeholder="Choose a safe Password"
            />
            <button onClick={() => console.log("onClick")}>
              {formState ? "login" : "Create an account"}
            </button>
            <button
              onClick={(e) =>
                setFormState({ ...formState, login: !formState.login })
              }
            >
              {formState.login
                ? "need to create an account"
                : "already have an account?"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
