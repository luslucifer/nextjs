'use client';

import { useParams } from 'next/navigation';
import axios from 'axios';

export default function PostId(){

  const parms = useParams();

  console.log(parms);

  //return <main>Post {parms?.id}</main>
  
}

export const fetchData = async () => {
  try {
    
  const parms = useParams();

    const response = await axios.get(`https://www.moviekex.online/movie/${parms?.id}`);

    console.log(response.status)
    return response.data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw new Error('Failed to fetch data');
  }
};