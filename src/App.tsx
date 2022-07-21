import LayoutAuth from 'components/Layout/LayoutAuth';
import LayoutMain from 'components/Layout/LayoutMain';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LayoutMain />} />
        <Route path="/auth/*" element={<LayoutAuth />}></Route>
      </Routes>
    </>
  );
}

export default App;
