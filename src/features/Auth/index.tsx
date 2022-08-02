import { Page404 } from 'components/Page404';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { LoginPage } from './page/LoginPage';

import { RegisterPage } from './page/RegisterPage';

export function AuthFeature() {
  const cookies = new Cookies();

  if (cookies.get('token')) {
    return <Navigate replace to="/product" />;
  }
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
