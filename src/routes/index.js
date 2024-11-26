import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import AdminLayout from "../components/AdminLayout";
import Users from "../pages/Users";
import Signup from "../pages/Signup";

const AppRoutes = () => {
    const isAuthenticated = !!localStorage.getItem("token");
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/admin"
            element={
              isAuthenticated ? <AdminLayout /> : <Navigate to="/login" />
            }
          >
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    );
  };
  

export default AppRoutes;
