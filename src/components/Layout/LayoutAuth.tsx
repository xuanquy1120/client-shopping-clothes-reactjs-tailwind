import { Page404 } from 'components/Page404';
import { AuthFeature } from 'features/Auth';
import { Route, Routes } from 'react-router-dom';
export const  LayoutAuth=()=> {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AuthFeature />} />
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </>
  );
}
