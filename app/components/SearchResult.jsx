import React from 'react';
import './SearchResult.css';

export const SearchResult = ({ result }) => {
  const handleClick = (e) => {
    alert(`Symbol: ${result.symbol}\nExchange: ${result.exchange}\nDescription: ${result.description}`);
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