import { Route, Routes } from 'react-router-dom';
import { ProductPage } from './page/ProductPage';
export function FeaturesProduct() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
      </Routes>
    </>
  );
}
