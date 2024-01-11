import { Routes, Route } from 'react-router-dom';
import Login from './views/Login';

function App() {


  return (
    <>
      <Routes>
      <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
