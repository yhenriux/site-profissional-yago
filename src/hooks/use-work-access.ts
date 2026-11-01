import { useState, useEffect } from "react";

const ACCESS_KEY = "work_access_unlocked";
const CORRECT_PASSWORD = "456852951";

export function useWorkAccess() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem(ACCESS_KEY);
    setIsUnlocked(stored === "true");
    setIsLoading(false);
  }, []);

  const unlock = (password: string): boolean => {
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(ACCESS_KEY, "true");
      setIsUnlocked(true);
      return true;
    }
    return false;
  };

  const lock = () => {
    sessionStorage.removeItem(ACCESS_KEY);
    setIsUnlocked(false);
  };

  return { isUnlocked, isLoading, unlock, lock };
}
