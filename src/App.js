import React from 'react';
import './App.css';
import Name from './component/Name';
import Age from './component/Age';
import Display from './component/Display';
import { useState } from 'react';

function App() {
  let [name,setName] = useState('');
  let [age,setAge] = useState('');
  return (
    <div className="App">
      <header className='header'>My Profile</header>
      <section className='section'>
        <Name setName={setName} />
        <Age setAge={setAge} />
        <Display name={name} age={age}/>
      </section>
      
    </div>
  );
}

export default App;
