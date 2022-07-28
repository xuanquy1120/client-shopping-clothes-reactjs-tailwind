import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartPage } from './page/CartPage';
export function FeaturesCart() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CartPage />} />
      </Routes>
    </>
  );
}
