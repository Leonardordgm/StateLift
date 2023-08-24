import React from 'react';
import './App.css';
import SeuNome from './evento/SeuNome';
import { useState } from 'react';
import Saudacao from './evento/Saudacao';

function App() {

  const [nome, setNome] = useState() 


  return (
    <div className='App'>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>  
    </div>
  );
}

export default App;
