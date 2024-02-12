import { Routes, Route } from 'react-router-dom';
import LogInUser from './views/LoginUser.jsx';
import PaidPlansRegister from './views/PaidPlansRegister.jsx';
import PaidPlansList from './views/PaidPlansList.jsx';
import RegisterUser from './views/RegisterUser.jsx';
import PaymentSuccesComponent from './components/PaymentSuccesComponent.jsx';
import Home from './views/Home.jsx';
import UserProfileComponent from './views/UserProfileComponent.jsx';
import Videos from './views/Videos.jsx';
import AiqBonusPlan from './views/AiqBonusPlan.jsx';
import About from './views/About.jsx';
import Contact from './views/Contact.jsx';
import NodeProfile from './views/NodeProfileComponent.jsx';

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
