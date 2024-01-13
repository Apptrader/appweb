import { Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import PaidPlans from './views/PaidPlans';

function App() {


  return (
    <>
      <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/paidPlans' element={<PaidPlans />}></Route>
      </Routes>
    </>
  )
}

export default App
