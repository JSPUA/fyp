// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//     <App />
 
// );

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Research from "./Research";
// import MainPage from "./MainPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainPage />}>
//         <Route path="/research" component={<Research/>} />
          
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

              
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import Research from './Research';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import LoginPage from './LoginPage';
import SignUP from './SignUP';
import ForgetPassword from './ForgetPassword';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/research",
        element: <Research/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/signup",
        element: <SignUP/>,
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassword/>,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
); 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

