import {React,useState} from 'react';
import './App.css';
import Footer from './components/Footer';
import ThemeButton from './components/ThemeButton'

import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import ThemeButton from "./components/ThemeButton";




function App() {

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [toggleClass, setToggleClass] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [themeState, setThemeState] = useState("dark")
  const [isDark,setDark] = useState(true);
 
  //styling the border dynamically
  const style = {
    border:`2px solid ${isDark ? "white" : "black"}`,
    borderRadius : "5px"
  }

  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const [toggleClass, setToggleClass] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);
  const [themeState, setThemeState] = React.useState("dark");


  console.log(style)
  const handleForm = (e) => {
    e.preventDefault();
    setForm((formProps) => ({ ...formProps, [e.target.name]: e.target.value }));
  };

  const annoyingSubmitButton = () => {
    setShowToast(false);

    if (form.password.length <= 6 || !validateEmail(form.email)) {
      setToggleClass((prevState) => !prevState);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 1000);
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <>

      <ThemeButton 
      setThemeState={setThemeState}
       themeState={themeState}
       setDark={setDark}
       />

      <ThemeButton setThemeState={setThemeState} themeState={themeState} />

      <section className={`form-section ${themeState}-theme`}>

        <a href="#" className="link">
          <span className="mask">
            <div className="link-container">
              <span className="link-title1 title">Annoying Submit Button 😡🙃</span>
              <span className="link-title2 title">Annoying Submit Button 😡🙃</span>
            </div>
          </span>
        </a>
        
        <form
          autoComplete="false"
          action="https://formspree.io/f/xqkjbjzw"
          method="POST"
          className="form-container"
          style = {style}
        >
          <div className="input-block">
            <label className={`label ${themeState}-theme`}>
              Email <span className="requiredLabel">*</span>
            </label>
            <input
              className={`input ${themeState}-theme ${
                !validateEmail(form.email) ? "wrong-input" : "correct-input"
              }`}
              type="email"
              name="email"
              value={form.email}
              onChange={handleForm}
              placeholder="coffeewithanmol@gmail.com"
              tabIndex={-1}
              required
            />
          </div>
          <div>
            {!validateEmail(form.email) ? (
              <p className="warning-message">Enter a valid email id</p>
            ) : (
              ""
            )}
          </div>
          <div className="input-block">
            <label className={`label ${themeState}-theme`}>
              Password <span className="requiredLabel">*</span>
            </label>
            <input
              className={`input ${
                form.password.length <= 6 ? "wrong-input" : "correct-input"
              } ${themeState}-theme`}
              type="password"
              name="password"
              value={form.password}
              onChange={handleForm}
              minLength="6"
              tabIndex={-1}
              required
            />
          </div>
          <div>
            {form.password.length <= 6 ? (
              <p className="warning-message">
                Password length should be more than 6
              </p>
            ) : (
              ""
            )}
          </div>
          <div
            style={{
              transform: `translateX(${
                toggleClass &&
                !(form.password.length > 6 && validateEmail(form.email))
                  ? "25vh"
                  : "0"
              }`,
              transition: "transform 190ms ease-in-out",
            }}
            // className={`submit-button-wrapper ${toggleClass ? 'float-end' : 'float-start'}`}
          >
            <button
              tabIndex={-1}
              className={`submit-button ${(form.password.length > 6 && validateEmail(form.email)) ? 'button-success' : ''
                }`}

              className={`submit-button ${
                form.password.length > 6 && validateEmail(form.email)
                  ? "button-success"
                  : ""
              }`}
              onMouseEnter={annoyingSubmitButton}
            >
              Submit
            </button>
          </div>
          <div
            className={`toast ${
              showToast ? "fadeIn" : "fadeOut"
            } ${themeState}-theme-toast`}
          >
            You can not submit until you fix all the validation errors...
          </div>
        </form>
      </section>
      <Footer theme={themeState} />
    </>
  );
}

export default App;
