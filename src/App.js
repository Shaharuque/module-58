import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

      {/*Products page keo private korey dilam */}
        <Route path='/products' element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }>
        </Route>
        {/*Orders page private route a thakbey user logged in holei Orders page a access pabo tar agey Orders a click korley shudu login page show korabey */}
        <Route path='/orders' element={
          <RequireAuth>
            <Orders/>
          </RequireAuth>
        }>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
