import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {LoginForm} from './components/loginForm';
import Header from './components/header';
import SideBar from './components/sideBar';
import InsertCours from './components/insertCours';
import InsertMatiere from './components/insertMatiere';
import Body from './components/body';

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
        {/* <Route path='/signup' element={<Header/>}/> */}
        <Route path='/admins' element={<SideBar/>}/>
        <Route path='/admins/insertCours' element={<InsertCours/>}/>
        <Route path='/insertMatiere' element={<InsertMatiere/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

