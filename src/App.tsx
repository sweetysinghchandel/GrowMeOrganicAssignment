// import * as React from 'react';npm install --save react-router-dom
// src/App.tsx
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserForm from './components/UserForm';
// import About from './components/About';
// import NotFound from './components/NotFound';
// import DepartmentsComponent from './components/DepartmentsComponent';
// import IndeterminateCheckbox from './components/YourParentComponent';
import YourComponent from './components/TableDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserForm />,
  },
  {
    path: "/detail",
    element: <YourComponent />,
  },
]);



const App: React.FC = () => {
  return (
     <RouterProvider router={router} />
    
  );
};

export default App;
