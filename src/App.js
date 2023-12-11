import "./Style.css";
import './App.css';
import Login from './Login';
import React, {useState} from 'react';

import { LoginContext } from './LoginContext';
import Profile from './Profile';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  
  const [userName , setUsername]=useState("")
  const [price , setPrice]=useState("")
  const [quantity , setQuantity]=useState("")
  const [description , setDescription]=useState("")

  const [showProfile , setShowprofile]=useState(false)


  return (
    <div className="App">
      <Card />
      <Card.Header />
      
      <LoginContext.Provider value={{userName ,setUsername, price ,setPrice, quantity ,setQuantity, description ,setDescription , showProfile , setShowprofile}}>

        {showProfile ? <Profile /> : <Login />}


      </LoginContext.Provider>
    </div>
  );
}

export default App;
