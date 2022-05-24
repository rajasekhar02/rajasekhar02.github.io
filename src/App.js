import React from 'react';
import './style.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
export default function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
