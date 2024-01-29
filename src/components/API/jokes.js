import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './jokes.css';

const RandomJoke = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    // Make an API request when the component mounts
    const fetchRandomJoke = async () => {
      try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
        if (response.data.type === 'twopart') {
          
          setJoke(`${response.data.setup} ${response.data.delivery}`);
        } else {
          
          setJoke(response.data.joke);
        }
      } catch (error) {
        console.error('Error fetching random joke:', error);
      }
    };

    fetchRandomJoke();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="container">
      <h2 className="heading">Random Joke:</h2>
      <p className="joke">{joke}</p>
    </div>
  );
};

export default RandomJoke;
