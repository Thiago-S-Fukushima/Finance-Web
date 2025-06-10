import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router";
import Login from './Login.jsx';
import Register from './Register.jsx';
import Transaction from './Transaction.jsx';
import Dashboard from './Dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="Login" element={<Login/>}/>
      <Route path="Register" element={<Register/>}/>
      <Route path="Transaction" element={<Transaction/>}/>
      <Route path="Dashboard" element={<Dashboard/>} />
    </Routes>
  </BrowserRouter>
)
