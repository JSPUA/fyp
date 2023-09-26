import React from 'react';
import CharacterInput from './CharacterInput';
import PasswordInput from './PasswordInput';
import Enter from './Enter'
import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Home() {
    const navigate = useNavigate();

    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/enter');
      };
    
  return (
    <div>
        <h1>Login </h1>
      <CharacterInput />
      <PasswordInput />
      <Button variant="primary">Login</Button>{' '}
    </div>
  );
}

export default Home;

