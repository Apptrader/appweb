import { Routes, Route } from 'react-router-dom';
import LogInUser from './views/LoginUser';
import PaidPlansRegister from './views/PaidPlansRegister';
import PaidPlansList from './views/PaidPlansList';
import RegisterUser from './views/RegisterUser';
import PaymentSuccesComponent from './components/PaymentSuccesComponent';
import Home from './views/Home';
import UserProfileComponent from './views/UserProfileComponent';
import Videos from './views/VIdeos';
import AiqBonusPlan from './views/AiqBonusPlan';
import About from './views/About';
import Contact from './views/Contact';
import NodeProfile from './views/NodeProfileComponent';

function App() {


  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/logInUser' element={<LogInUser />}></Route>
        <Route path='/paidPlansRegister' element={<PaidPlansRegister />}></Route>
        <Route path='/paidPlansList' element={<PaidPlansList />}></Route>
        <Route path='/registerUser' element={<RegisterUser />}></Route>
        <Route path='/profile' element={<UserProfileComponent />}></Route>
        <Route path='/payment/success' element={<PaymentSuccesComponent />}></Route>
        <Route path='/allvideos' element={<Videos/>}></Route>
        {/*  <Route path='/payment/cancel' element={<PaymentCancelComponent />}></Route> */}
        <Route path='/aiqBonusPlan' element={<AiqBonusPlan />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/nodeProfile' element={<NodeProfile/>}></Route>
        
      </Routes>
    </>
  )
}

export default App
