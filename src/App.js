import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllProducts from './pages/AllProducts';
import Chart from './pages/Chart';
import { DataContext } from './context/DataContext'
import { useContext, useEffect } from 'react'
import AdminPanel from './pages/AdminPanel';

function App() {

  const { products, setProducts, buyed, setBuyed } = useContext(DataContext);

  return (

    <Router>
      <div className="App">

        <nav className='navbar'>
          <Link to='/'><div className="logo"></div></Link>
          <ul>
            <Link to='/'><li className='navtext'>Home</li></Link>
            <Link to='/AllProducts'><li className='navtext'>Shop</li></Link>
            <Link to='/AdminPanel'><li className='navtext'>Admin Panel</li></Link>
          </ul>

          <ul>
            <Link to='/Cart'>
              <li className='navtext'><span className="material-symbols-outlined shopicon">
                local_mall
              </span></li>
            </Link>
            {
              buyed.length == 0 ? <div style={{ display: "none" }}>{buyed.length}</div> : <div style={{ borderRadius: 50, backgroundColor: 'orange', width: 28, height: 28, textAlign: 'center' }} >{buyed.length}</div>
            }

          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/AllProducts' element={<AllProducts />} />
          <Route path='/AdminPanel' element={<AdminPanel />} />
          <Route path='/Cart' element={<Chart />} />
        </Routes>
        <div className="bottomfooterNav">

          <div className="bottomfooter1div">
            <Link to='/'><div className="logo" style={{ backgroundColor: 'transparent' }}></div></Link>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>

          <div className="bottomfooter2div">
            <Link className='link' to='/' ><p>Home</p></Link>
            <Link className='link' to='/AllProducts' ><p>Shop</p></Link>
            <Link className='link' to='/AdminPanel' ><p>Admin Panel</p></Link>
          </div>

          <div className="bottomfooter3div">
            <h3>Contact</h3>
            <h4>Times Square, Iskon</h4>
            <h4>info@gmail.com</h4>
            <h4>+90 1231233245</h4>
          </div>
        </div>
      </div>

    </Router>



  );
}

export default App;
