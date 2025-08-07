import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router";
import Login from '../src/Login';
import Register from '../src/Register.jsx';
import Transaction from '../src/Transaction.jsx';
import Dashboard from '../src/Dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Transaction" element={<Transaction/>}/>
      <Route path="/Dashboard" element={<Dashboard/>} />
    </Routes>
  </BrowserRouter>
)
