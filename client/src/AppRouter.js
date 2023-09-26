import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import App from './App';
import LoginPage from './LoginPage'; // Create the LoginPage component
import Research from './Research';
import SignUP from './SignUP';
import ForgetPassword from './ForgetPassword';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/research" element={<Research/>} />
        <Route path="/signup" element={<SignUP/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
   </Routes>
    </Router>
  );
}

export default AppRouter;
