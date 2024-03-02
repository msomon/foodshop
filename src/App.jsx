
import { Route, Routes } from 'react-router'
// import './App.css'
import Home from './Pages/Home'
import Navbar from './Share/Navbar'
import Manu from './component/manu'
import Login from './userAuth/Login'
import SignUp from './userAuth/SignUp'
import Footer from './Share/footer'
import Cart from './component/cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './userAuth/RequireAuth'
import Dashboard from './dashboard/dashboard'
import Reviews from './dashboard/reviews'
import AddReview from './dashboard/addReview'
import MyOrders from './dashboard/myOrders'

function App() {
 

  return (
    <div className='home '>
<ToastContainer />
      <Navbar />

    <Routes>

<Route path="/" element={<Home/>}></Route>
<Route path="/manu" element={<Manu/>}></Route>
<Route path="/cart" element={
  <RequireAuth>
  <Cart/>
  </RequireAuth>

}></Route>
<Route path="/login" element={<Login />}></Route>
<Route path="/signup" element={<SignUp />}></Route>

<Route  path="dashboard" element={<Dashboard></Dashboard>}>
<Route path='myOrders' element={<MyOrders/>} >  </Route>
<Route path='addreview' element={<AddReview></AddReview>} >  </Route>



</Route>



    </Routes>
    <Footer/>
    </div>
   
  )
}

export default App
