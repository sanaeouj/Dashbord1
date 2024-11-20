import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Dashboard from './Pages/dashboard/Dashboard';  
import Teams from './Pages/teams/Teams';  
import Contacts from './Pages/contacts/Contacts';
import Invoices from './Pages/invoices/Invoices';
import ProfileForm from './Pages/form/ProfileForm';
import Calendar from './Pages/calendar/Calendar';
import FAQ from './Pages/faq/FAQ';
import BarChart from './Pages/bar/BarChart';
import PieChart from './Pages/pie/PieChart';
import LineChart from './Pages/line/LineChart';
import GeographyChart from './Pages/geography/GeographyChart';
import NotFound from './Pages/notfound/NotFound'; // 404 Page

// Create the router with all routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'Teams', element: <Teams /> },
      { path: 'contacts', element: <Contacts /> },
      { path: 'invoices', element: <Invoices /> },
      { path: 'form', element: <ProfileForm /> },
      { path: 'calendar', element: <Calendar /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'bar', element: <BarChart /> },
      { path: 'pie', element: <PieChart /> },
      { path: 'line', element: <LineChart /> },
      { path: 'geography', element: <GeographyChart /> },
      { path: '*', element: <NotFound /> }, // Catch-all for 404
    ],
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  {/* Wrap your app with RouterProvider here */}
  </React.StrictMode>
);