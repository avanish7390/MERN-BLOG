import axios from 'axios';
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import OAuth from '../components/OAuth.jsx';
import { UserContext } from '../context/userContext.js';

const Login = () => {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
    passwordVisible: false,
  });
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const { setCurrentUser } = useContext(UserContext)

  const changeInputHandler = (e) => {
    setuserData((prevState) => {
      return {...prevState, [e.target.name]: e.target.value };
    });
  };

  const togglePasswordVisibility = () => {
    setuserData((prevState) => {
      return {...prevState, passwordVisible:!prevState.passwordVisible };
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError('')
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, userData);
      const user = await response.data;
      setCurrentUser(user)
      navigate('/')
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login__form" onSubmit={loginUser}>
          {error && <p className="form__error-message">{error}</p>}
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
          <div className="password-input">
            <input
              type={userData.passwordVisible? "text" : "password"}
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={changeInputHandler}
            />
            <span className={`eye-icon ${userData.passwordVisible? "visible" : ""}`} onClick={togglePasswordVisibility}>👁</span>
          </div>
          <button type="submit" className='btn primary'>Login</button>
          {/* <OAuth/> */}
          {/* <Link to="/forgot" className="forgot-password-link">Forgot password?</Link> */}
        </form>
        <small>Don't have an account? <Link to="/register">Sign up</Link></small>
      </div>
    </section>
  );
};

export default Login;