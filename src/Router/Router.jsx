import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom';
import '../index.css';
import Plant from '../pages/Plant';
import Plan from '../compment/Plan';

const router = createBrowserRouter([
  {
    path: '/Plant',
    element: <Plant />,
  },
  {
    path: '/plan',
    element: <Plan />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
export default Rout;
