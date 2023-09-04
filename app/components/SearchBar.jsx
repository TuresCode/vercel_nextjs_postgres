"use client";
import { useState } from "react";
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [duration, setDuration] = useState(0); // Initialize duration state

  const fetchData = (value) => {
    const apiUrl = `/api/get-stock?symbol=${value}`;
    const startTime = Date.now(); // Record start time
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => {
        const endTime = Date.now(); // Get end time
        const duration = endTime - startTime; // Subtract start time from end time
        setDuration(duration); // Set duration state
        //console.log(json);
        console.log(json.result.rows);
        if (json.result.rows && Array.isArray(json.result.rows)) {
          console.log("json.result is an array");
          // Filter and set results based on JSON data
          const results = json.result.rows.filter((ticker) => {
            return (
              value &&
              ticker 
              // &&
              // ticker.symbol &&
              // ticker.symbol.toLowerCase().includes(value.toLowerCase())
            );
          });

          setResults(results);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <svg
        className="h-4 w-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
          clipRule="evenodd"
        />
      </svg>
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      
      <p className="text-sm text-gray-500">{duration}ms</p>
    </div>
  );
};
