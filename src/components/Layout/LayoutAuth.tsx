import React from 'react';
import AuthFeature from 'features/Auth';
import { Route, Routes } from 'react-router-dom';
import Page404 from 'components/Page404';
import Footer from 'components/Footer';
export default function LayoutAuth() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AuthFeature />} />
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </>
  );
}
