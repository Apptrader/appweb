import { Routes, Route } from 'react-router-dom';
import LogInUser from './views/LoginUser';
import PaidPlansRegister from './views/PaidPlansRegister';
import PaidPlansList from './views/PaidPlansList';
import RegisterUser from './views/RegisterUser';

function App() {


  return (
    <>
      <Routes>
        <Route path='/logInUser' element={<LogInUser />}></Route>
        <Route path='/paidPlansRegister' element={<PaidPlansRegister />}></Route>
        <Route path='/paidPlansList' element={<PaidPlansList />}></Route>
        <Route path='/registerUser' element={<RegisterUser />}></Route>
      </Routes>
    </>
  )
}

export default App
