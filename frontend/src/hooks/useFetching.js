import { useState, useCallback } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = useCallback(
    async (...params) => {
      try {
        setIsLoading(true);
        await callback(...params);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    },
    [callback]
  );
  return [fetching, isLoading, error];
};
