import Page404 from 'components/Page404';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
export default function AuthFeature() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="login" />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </>
  );
}
