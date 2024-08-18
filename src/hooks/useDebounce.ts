import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number = 250): T {
  const { 0: debouncedValue, 1: setDebouncedValue } = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
