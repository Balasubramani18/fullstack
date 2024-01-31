import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Pages/Login';
import FacLogin from './Pages/Fac';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Reg from './Pages/Reg';
import Home from './Pages/home';
import { Provider } from 'react-redux';
import Pay from './Pages/Pay';
import OD from './Pages/OD';
import Appli from './Pages/Appli';
import Mca from './Cpage/Mca';
import Mba from './Cpage/Mba';
import Ai from './Cpage/Ai';
import Mds from './Cpage/Mds';
import Mcs from './Cpage/Mcs';
import Mph from './Cpage/Mph';
import ProfilePage from './Pages/Profile';
import OrderDetails7 from './Components/Track';
import MBA from './Cpage/Mba';
import MCY from './Cpage/Mcs';
import DS from './Cpage/Mds';
import PHY from './Cpage/Mph';


function App() {
  return (

   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/fac' element={<FacLogin/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/Payment' element={<Pay/>}/>
       <Route path='/OnlineDegree' element={<OD/>}/>
      <Route path='/Application' element={<Appli/>}/>
      <Route path='/MCS' element={<Mca/>}/>
      <Route path='/Mba' element={<Mba/>}/>
      <Route path='/Ai' element={<Ai/>}/>
      <Route path='/Mds' element={<Mds/>}/>
      <Route path='/Cy' element={<Mcs/>}/>
      <Route path='/Mds' element={<Mph/>}/>
      <Route path='/Profile' element={<ProfilePage/>}/>
      <Route path='/Status' element={<OrderDetails7/>}/>
      <Route path='/MC' element={<Mca/>}/>
      <Route path='/AI' element={<Ai/>}/>
      <Route path='/MBA' element={<MBA/>}/>
      <Route path='/DS' element={<DS/>}/>
      <Route path='/CY' element={<MCY/>}/>
      <Route path='/PHY' element={<PHY/>}/>
      
      {/* export default App */}

   </Routes>
   
   </BrowserRouter>
  )}



// import {RouterProvider, createBrowserRouter} from 'react-router-dom';
// import Home from './Pages/home';
// import Login from './Pages/Login';
// import FacLogin from './Pages/Fac';
// function App() {
//   const router= createBrowserRouter([
//     {
//       path: '/',
//       element: <Home/>
//     },
//     {
//       path:'/login',
//       element:<Login/>
//     },
//     {
//       path:'/fac',
//       element:<FacLogin/>
//     }
//   ])
//   return (
//     <div>
//     <RouterProvider router={router}>
//     </RouterProvider>

//     </div>
//   );
// }

export default App;

