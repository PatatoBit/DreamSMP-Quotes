import React, { useState } from 'react'
import { storage, db, auth } from '../firebase'
import { ref } from 'firebase/storage'

function Quote() {
    let [quote, setQuote] = useState('');
    let prevQuote: string;
    let dummyQuote: string;


    // replace this with Firestore later
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

export default Quote
