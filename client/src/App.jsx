import { Routes, Route } from 'react-router-dom';
import LogInUser from './views/LogInUser.jsx'
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

import getParamsEnv from './functions/getParamsEnv.js';

const {API_URL_BASE, VITE_LOGIN_USER, VITE_HOME, VITE_PAID_PLANS_REGISTER, VITE_PAID_PLAN_LIST,
  VITE_REGISTER_USER, VITE_PROFILE, VITE_PAYMENT_SUCCES, VITE_ALL_VIDEOS,
  VITE_AIQ_BONUS_PLAN, VITE_ABOUT, VITE_CONTACT, VITE_NODE_PROFILE, VITE_ROOT, VITE_REGISTER} = getParamsEnv()



function App() {


  return (
    <>
      <Routes>
        <Route path={VITE_HOME} element={<Home/>}></Route>
        <Route path={VITE_LOGIN_USER} element={<LogInUser />}></Route>
        <Route path={VITE_PAID_PLANS_REGISTER} element={<PaidPlansRegister />}></Route>
        <Route path={VITE_PAID_PLAN_LIST} element={<PaidPlansList />}></Route>
        <Route path={VITE_REGISTER_USER} element={<RegisterUser />}></Route>
        <Route path={VITE_PROFILE} element={<UserProfileComponent />}></Route>
        <Route path={VITE_PAYMENT_SUCCES} element={<PaymentSuccesComponent />}></Route>
        <Route path={VITE_ALL_VIDEOS} element={<Videos/>}></Route>
        {/*  <Route path='/payment/cancel' element={<PaymentCancelComponent />}></Route> */}
        <Route path={VITE_AIQ_BONUS_PLAN} element={<AiqBonusPlan />}></Route>
        <Route path={VITE_ABOUT} element={<About/>}></Route>
        <Route path={VITE_CONTACT} element={<Contact/>}></Route>
        <Route path={VITE_NODE_PROFILE} element={<NodeProfile/>}></Route>
        <Route path={VITE_ROOT} element={<Home/>}></Route>
        <Route path={VITE_REGISTER} element={<RegisterUser/>}></Route>
        
      </Routes>
    </>
  )
}

export default App
