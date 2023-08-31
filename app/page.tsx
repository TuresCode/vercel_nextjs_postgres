'use client'
import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar';
import { SearchResultsList } from './components/SearchResultsList';
import Particles from "./components/particles";

function App() {

  const [results, setResults] = useState([]);
  return (
    <div className="flex justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="hidden w-screen h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
      <div className='search-bar-container'>
        <SearchBar setResults={setResults}/>
        <SearchResultsList results={results}/>
      </div>
    </div>
  );
}

export default App