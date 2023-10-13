import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CustomerForm from './components/Customer';
import Hero from './components/Hero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Hero />
    <CustomerForm />
  </>
);





