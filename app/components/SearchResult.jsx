import React from 'react';
import './SearchResult.css';


export const SearchResult = ({ result }) => {
  const handleClick = (e) => {
    alert(`Symbol: ${result.symbol}\nExchange: ${result.exchange}\nDescription: ${result.description}`);
    //redirect to page
    //url = `https://testserver-tl5pxhglmq-ew.a.run.app/calculate-levels?ticker=${result.symbol}&broker=${result.exchange}&interval=1D`;


  };

  return (
    <div
      className="search-result"
      onClick={handleClick}
    >
      <p><strong>Symbol:</strong> {result.symbol}</p>
      <p><strong>Exchange:</strong> {result.exchange}</p>
      <p><strong>Description:</strong> {result.description}</p>
    </div>
  );
};