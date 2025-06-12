// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home  from './routes/Home';
import Gifts from './routes/Gifts';
import Payment from './routes/Payment';
import Camera from './routes/Camera';
import Result from './routes/Result';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gifts" element={<Gifts />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/camera" element={<Camera />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  </BrowserRouter>
);

export default App;