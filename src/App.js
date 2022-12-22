import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AntrianView from './Container/AntrianView/AntrianView';
import Admin from './Container/Admin/Admin';
import AntrianActive from './Container/AntrianActive/AntrianActive';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AntrianView />}></Route>
      <Route path='/admin' element={<Admin />}></Route>
      <Route path='/antrianActive' element={<AntrianActive />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
