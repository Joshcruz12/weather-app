import React from "react";
import { useState } from "react";
import quotes from "../quotes.json";


const Quote = () => {

    const randomQuote = Math.floor(Math.random() * quotes.length);

    const [quote, setQuote] = useState(quotes[randomQuote]);

    return (
        <div className="quote">
            <h3 className="quoteText">
                {quote.quote}
            </h3>
            <p className="quoteAuthor"> {quote.author} </p>
        </div>
    )
}

export default Quote;