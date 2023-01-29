import { useState, useEffect } from 'react';

export default function useLocaleStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem('key', JSON.stringify(key));
  }, [key, state]);
  return [state, setState];
}
