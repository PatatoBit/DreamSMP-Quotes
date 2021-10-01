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
      


      // random quote without being the same with the previous one
      let random = Math.floor(Math.random() * quotesArr.length)
      let dummyQuote: string = quotesArr[random];
      let prevQuote: string = quote;
      
      while (dummyQuote === prevQuote) {
        random =  Math.floor(Math.random() * quotesArr.length);
      }
      setQuote(quote = quotesArr[random].content);
      setAuthor(author = quotesArr[random].author);

      
      console.log(`Current Quote: ${quote}\nPrevious Quote: ${prevQuote}`);
      
      setQuote(quote = quotesArr[random].content)
      setAuthor(author = `-` + quotesArr[random].author)
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
