import React from 'react';
import './App.css';

import Header from './unit1/Components/Header'

const Body: React.FC = () => {
  return (<>
    <h1>Title</h1>
    <p>Hank..........</p>
    <img src="urban.png" alt="" srcSet='1000w' />
  </>)
}

const App = () => {
  return <>
    <Header />
    <Body />
  </>
}

export default App;
