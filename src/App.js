import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/LoginPage/Login';
import Signup from './components/SignupPage/Signup';
import Home from './components/HomePage/Home';
import Profile from './components/Profile/Profile';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
