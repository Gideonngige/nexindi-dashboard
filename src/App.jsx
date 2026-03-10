import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Pages/Signin';
import Shopscan from './Pages/Shopscan';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';
import ShopscanUsers from './Pages/Shopscan/ShopscanUsers';
import ShopscanShops from './Pages/Shopscan/Shopscanshops';
import ShopscanPayments from './Pages/Shopscan/Shopscanpayments';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shopscan" element={<Shopscan />} />
        <Route path="/shopscan/users" element={<ShopscanUsers />} />
        <Route path="/shopscan/shops" element={<ShopscanShops />} />
        <Route path="/shopscan/payments" element={<ShopscanPayments />} />
        <Route path="/settings" element={<Settings />} />


      </Routes>
    </Router>
  );
}

export default App;