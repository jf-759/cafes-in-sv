import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './components/App';
import CafeList from './components/CafeList/CafeList'
import About from './components/About/About';
import CoffeeShopDetails from './components/CoffeeShopDetails/CoffeeShopDetails';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />} />
        <Route path="/" element={<CafeList />} />
        <Route path="/details/:id" element={<CoffeeShopDetails />} />
      </Route>
    </Routes>
  </Router>,
  //document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();