import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserForm from './components/UserForm';
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
