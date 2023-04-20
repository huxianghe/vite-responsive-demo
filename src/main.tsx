import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import BaseForm from './components/Form';
import BaseCard from './components/Card';
import BaseRFS from './components/Rfs';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <BaseForm />,
      },
      {
        path: 'form',
        element: <BaseForm />,
      },
      {
        path: 'card',
        element: <BaseCard />,
      },
      {
        path: 'rfs',
        element: <BaseRFS />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
