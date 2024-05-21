// import Character from '@/components/Character';
"use client";
import CharCard from '@/components/CharCard';
import { useState, useEffect } from 'react';

function HomePage() {
    return (
      <>
        {/* <div><Character /></div> */}
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {CharacterVars()}
          </div>
        </div>
      </>
    );
}

export default HomePage;

function CharacterVars() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/1');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setCharacter(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
    </div>
  );
}