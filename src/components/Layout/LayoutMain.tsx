import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';
import { Page404 } from 'components/Page404';
import { FeaturesCart } from 'features/Cart';
import { FeaturesHome } from 'features/Home';
import { FeaturesProduct } from 'features/Product';
import { Route, Routes } from 'react-router-dom';

export const LayoutMain = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="mt-20">
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
};
