import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="main">
      <Quote />
      <QuoteForm />
    </div>
  )
}


function Quote() {
  let [quote, setQuote] = useState('');
  let prevQuote: string;
  let dummyQuote: string;

  const quoteArr = [
    'Just killed a woman, feeling good.',
    'Mum, am I adoted?',
    'I want a pet moth and I want to name it ✨Clementine✨'
  ]
  
  const nextQuote = async (e: any) => {
    e.preventDefault();
    
    prevQuote = quote;
    dummyQuote = quoteArr[Math.floor(Math.random() * quoteArr.length)]
    while(prevQuote === dummyQuote) {
      dummyQuote = quoteArr[Math.floor(Math.random() * quoteArr.length)]
    }
    setQuote(quote = dummyQuote)
    
    console.log(`${dummyQuote}\n${quote}\n${prevQuote}`)
  }
  return (
    <div className="quote-container">
      <div className="container">
        <h1 className="quote">{quote}</h1>
        <div className="break"></div>
        <button onClick={nextQuote}>:)</button>
      </div>
    </div>
  )
}

function QuoteForm() {
  return (
    <div className="form-container">
      <div className="container">
        <form className="quote-form">
          <p className='quote-input'>Have new quotes to share?</p>
          <div className="break"></div>
          <input className="quote-input"type="text" placeholder='Type your quote here'/>
          <div className="break"></div>
          <input className='quote-file'type='file' />
          <div className="break"></div>
          <button className='quote-button' type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}


export default App;
