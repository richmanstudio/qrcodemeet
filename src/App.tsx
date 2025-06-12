// src/App.tsx
import React from 'react';
// вместо BrowserRouter берём HashRouter
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home    from './routes/Home';
import Gifts   from './routes/Gifts';
import Payment from './routes/Payment';
import Camera  from './routes/Camera';
import Result  from './routes/Result';

const App: React.FC = () => (
  // basename в HashRouter не нужен, всё идёт после #
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gifts" element={<Gifts />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/camera" element={<Camera />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  </Router>
);

export default App;