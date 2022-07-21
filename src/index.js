import React from "react";

import "./index.css";

import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";

import ProtectedComponents from "./components/ProtectedComponents";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComponents>
              <App />
            </ProtectedComponents>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedComponents loginOnly={false}>
              <LoginPage />
            </ProtectedComponents>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedComponents loginOnly={false}>
              <RegisterPage />
            </ProtectedComponents>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
