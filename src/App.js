import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './components/custom-react-toastify.css';

import Index from './pages/Index';

console.log('Environment: ', process.env.NODE_ENV)
function App() {
  return (
    <div className="w-full h-screen min-h-[780px] overflow-y-auto text-gray-800 dark:text-gray-300 font-[500]" id='scroll'>
      <ToastContainer position='top-center' autoClose={3000} closeOnClick />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/index" />} /> {/* 默认路由 */}
          <Route path='/index' element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
