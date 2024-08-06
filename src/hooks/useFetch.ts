import { useState, useEffect } from "react";

interface Cache<T> {
  data: T;
  ttl: number;
}

const cache = new Map<string, Cache<any>>();

const useFetch = <T>(url: string, options = {}, ttl = 60000) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      cache.set(url, { data: result, ttl: Date.now() + ttl });
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cache.has(url)) {
      const cachedData = cache.get(url) as Cache<T>;
      if (Date.now() < cachedData.ttl) {
        setData(cachedData.data);
        setLoading(false);
        return;
      } else {
        cache.delete(url);
      }
    }

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;
