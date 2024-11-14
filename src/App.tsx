import React, { FunctionComponent } from "react";
import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Register } from "./components/Registration";
import { Login } from "./components/Login";
import { WelcomePage } from "./components/WelcomePage";
import { ToDoList } from "./components/ToDo";
import { NavBar } from "./components/NavBar";
import { ToDoCategories } from "./components/ToDoCategory";

export const App: FunctionComponent = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="/category" element={<ToDoCategories />} />
      </Routes>
    </div>
  );
};
