import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddUser from './components/pages/AddUser.tsx';
import { FormProvider } from './contexts/User.context.tsx';
import UpdateUser from './components/pages/UpdateUser.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add-user",
    element: <AddUser />,
  },
  {
    path: "/update-user",
    element: <UpdateUser />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  </React.StrictMode>,
)
