'use client';
 
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// Define the GET function to fetch data
export const GET = async () => {
  try {
    const response = await fetch('https://www.moviekex.online/movie/tt4154796');
    const data = await response.json();
    console.log('Fetched data:', data); // Log fetched data
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
};

export default function DisplayParameterValue() {
  const [movieData, setMovieData] = useState(null); // State to hold the fetched movie data
  const searchParams = useSearchParams(); // Get the search parameters from the URL

  useEffect(() => {
    // Fetch data using the GET function when the component mounts
    const fetchData = async () => {
      try {
        const data = await GET(); // Call the GET function to fetch data
        console.log('Received data:', data); // Log received data
        setMovieData(data); // Set the fetched data in the state
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to run the effect only once when the component mounts

  // Retrieve the value of the parameter you're interested in
  const paramValue = searchParams?.get('paramName');

  // Render the parameter value and the fetched movie data
  return (
    <div>
      <div>Parameter Value: {paramValue || 'Parameter not found'}</div>
      <div>Movie Data: {movieData ? JSON.stringify(movieData) : 'Loading...'}</div>
    </div>
  );
}
