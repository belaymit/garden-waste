import { useState, useEffect } from 'react';
import type { T_List } from "../types/listTypes";
import { skipImages } from "../types/listTypes";

const useFetchSkips = (postcode: string, area: string) => {
  const [skips, setSkips] = useState<T_List[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: T_List[] = await response.json();
        
        const skipsWithImages = data.map(skip => ({
          ...skip,
          image: skipImages[Math.floor(Math.random() * skipImages.length)]
        }));
        
        setSkips(skipsWithImages);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setSkips([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, [postcode, area]);

  return { skips, loading, error };
};

export default useFetchSkips;