
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
import AddReview from './dashboard/addReview'
import MyOrders from './dashboard/myOrders'
import Payment from './dashboard/Payment'
import Users from './dashboard/users'
import RequireAdmin from './userAuth/RequireAdmin'
import AddProduct from './dashboard/addProduct'
import AllOrders from './dashboard/allOrders'
import MyProfile from './dashboard/MyProfile'
import UpdateMyProfile from './dashboard/UpdateMyProfile'
import AllItems from './dashboard/allItems'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {

  useEffect( ()=>{
    AOS.init({
      disable: 'mobile'
    });
  },[])
 

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

<Route  path="dashboard" element={

<Dashboard />}>

<Route path='myorders' element={
<RequireAuth><MyOrders/></RequireAuth>} >  </Route>

<Route path='myprofile' element={
<RequireAuth><MyProfile/></RequireAuth>} >  </Route>

<Route path='updatemyprofile' element={
<RequireAuth><UpdateMyProfile/></RequireAuth>} >  </Route>


<Route path='payment' element={
<RequireAuth><Payment/></RequireAuth>} >  </Route>

<Route path='addreview' element={
  <RequireAuth> <AddReview/> </RequireAuth>} > </Route>

<Route path='users' element={
  <RequireAdmin> <Users/> </RequireAdmin>} >  </Route>

<Route path='addproduct' element={
  <RequireAdmin> <AddProduct/> </RequireAdmin>} >  </Route>

<Route path='allitems' element={
  <RequireAdmin> <AllItems/> </RequireAdmin>} >  </Route>

<Route path='allorders' element={
  <RequireAdmin> <AllOrders/> </RequireAdmin>} >  </Route>





</Route>



    </Routes>
    <Footer/>
    </div>
   
  )
}

export default App
