import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {LoginForm} from './components/loginForm';
import Header from './components/header';
import SideBar from './components/sideBar';
import InsertCours from './components/insertCours';
import InsertMatiere from './components/insertMatiere';
// import InsertChapitre from './components/insertChapitre';
import SignupForm from './components/signupForm';
import Body from './components/body';
import HomeChapitre from './components/chapitre/homeChapitre';
import InsertChapitre from './components/chapitre/insertChapitre';

function App() {
  return (
    // <div>
    //   <Header/>
    //     {/* <LoginForm/> */}
      
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/admins' element={<SideBar/>}/>
        <Route path='/insertCours' element={<InsertCours/>}/>
        <Route path='/admins/:id' element={<Body/>}/>
        <Route path='/insertMatiere' element={<InsertMatiere/>}/>
        <Route path='/homechapitre' element={<HomeChapitre/>}/>
        <Route path='/insertchapitre' element={<InsertChapitre/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

