// eslint-disable-next-line
import React, { useState } from 'react'
// eslint-disable-next-line 
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebase'


function Quote() {
    let [quote, setQuote] = useState('');
    let [author, setAuthor] = useState('');
    let quotesArr:any = [];

    const nextQuote = async (e: any) => {
      // get every docs from firestore and store it into an array
      e.preventDefault();
      const docsSnap = await getDocs(collection(db,"quotes"));
      docsSnap.forEach((doc) => {
        quotesArr.push({
          content: doc.data().content,
          author: doc.data().author
        });
      });
      
      let random = Math.floor(Math.random() * quotesArr.length)
      let prevQuote = quote;
      let prevAuthor = author;

      let dummyQuote = quotesArr[random].content
      let dummyAuthor = quotesArr[random].author
      
      while(prevQuote === dummyQuote && prevAuthor === dummyAuthor) {
        dummyQuote = quotesArr[random].content
        dummyAuthor = quotesArr[random].author
      }
      
      setQuote(quote = dummyQuote)
      setAuthor(author = '- ' + dummyAuthor)

      console.log(`Current: ${dummyQuote}\nPrevious: ${prevQuote}`)
      console.log(quotesArr);


    }
    return (
      <div className="quote-container">
        <div className="container">
          <h1 className="quote">{quote}</h1>
          <div className="break"></div>
          <h3 className='author'>{author}</h3>
          <div className="break"></div>
          <button onClick={nextQuote}>:)</button>
        </div>
      </div>
    )
  }

export default Quote
