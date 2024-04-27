import { useState, useEffect } from 'react';

function useCharacter(characterId) {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!characterId) return;  // Prevent fetching if no ID is provided
      setLoading(true);
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
        if (!response.ok) throw new Error(`Network response was not ok: ${response.status}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [characterId]);

  return { character, loading, error };
}
