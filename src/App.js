import React from 'react';

import FullName from './component/Profile/FullName'

import Adress from './component/Profile/Adress'

import ProfilePicture from './component/Profile/ProfilePicture';
import './App.css';


function App() {
  return (
    <div className="card">
      <FullName />
      <Adress />
      <ProfilePicture />

    </div>
  );
}

export default App;
