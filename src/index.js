import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { SidebarProvider } from './context/sidebarContext'
import './assets/sameachik.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </SidebarProvider>
  </React.StrictMode>
);
