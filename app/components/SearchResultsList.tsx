import React from 'react';
import './SearchResultsList.css';
import { SearchResult } from './SearchResult';

// Define a type for each item in the results JSON data
interface SearchResultItem {
    screener: string;
    exchange: string;
    symbol: string;
    description: string;
}

// Define the type for the props
interface SearchResultsListProps {
    results: SearchResultItem[];
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({ results }) => {
    return (
        <div className='results-list'>
            {results.map((result, id) => (
                <SearchResult result={result} key={id} />
            ))}
        </div>
    );
};