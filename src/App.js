import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/LoginPage/Login';
import Signup from './components/SignupPage/Signup';
import Home from './components/HomePage/Home';
import Profile from './components/Profile/Profile';
// import { Home } from './components/HomePage/Home';



function App() {
  // useEffect(()=>{
  //   fetch('http://localhost:5001/api/user/1').then((res)=>{
  //     if(res){
  //       console.log(res)
  //     }
  //   })
  // },[])
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
