// eslint-disable-next-line
import React, { useState } from 'react'
// eslint-disable-next-line 
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebase'


function Quote() {
    let [quote, setQuote] = useState('');
    let quotesArr:any = [];
    let prevQuote: string;
    let dummyQuote: string;

    const quotesRef = collection(db, 'quotes')

    const nextQuote = async (e: any) => {
      // get every docs from firestore and store it into an array
      e.preventDefault();
      const docsSnap = await getDocs(collection(db,"quotes/TommyInnit/quotes"));
      docsSnap.forEach((doc) => {
        quotesArr.push(doc.data().content);
      });
      
      prevQuote = quote;
      dummyQuote = quotesArr[Math.floor(Math.random() * quotesArr.length)]
      while(prevQuote === dummyQuote) {
        dummyQuote = quotesArr[Math.floor(Math.random() * quotesArr.length)]
      }
      setQuote(quote = dummyQuote)
      
      console.log(`${dummyQuote}\n${quote}\n${prevQuote}`)
      console.log(quotesArr);

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
