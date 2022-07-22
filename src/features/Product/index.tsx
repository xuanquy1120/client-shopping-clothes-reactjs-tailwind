import { Route, Routes } from 'react-router-dom';
import ProductPage from './page/ProductPage';
export default function FeaturesProduct() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
      </Routes>
    </>
  );
}
