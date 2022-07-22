import Navbar from 'components/Navbar';
import React from 'react';
import FeaturesCart from 'features/Cart';
import FeaturesHome from 'features/Home';
import { Route, Routes } from 'react-router-dom';
import Page404 from 'components/Page404';
import Footer from 'components/Footer';
import FeaturesProduct from 'features/Product';
export default function LayoutMain() {
  return (
    <>
      <Navbar></Navbar>
      <div className="mt-28">
        <Routes>
          <Route path="/" element={<FeaturesHome />} />
          <Route path="/cart/*" element={<FeaturesCart />} />
          <Route path="/product/*" element={<FeaturesProduct />} />
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}
