import { useState, useEffect } from "react";

export const useFetch = (callback: () => void, options: unknown): [boolean, string] => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetching = async () => {
      try {
        setIsLoading(true);
        await callback();
      } catch {
        setError("произошла ошибки :(");
      } finally {
        setIsLoading(false);
      }
    }
    fetching()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options])
  return [ isLoading, error];
};
