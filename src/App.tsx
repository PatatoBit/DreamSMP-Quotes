import React from 'react';

import './App.css';
import QuoteForm from './components/QuoteForm'
import Quote from './components/Quote'

function App() {
  return (
    <div className="main">
      <Quote />
      <QuoteForm />
    </div>
  )
}

export default App;
