import {useState, useEffect, useRef} from 'react';

const useThrottle = <T,>(value: T, limit: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRan = useRef<Date>(new Date(0));

  useEffect(() => {
    const handler = setTimeout(() => {
      if (new Date().getTime() - lastRan.current.getTime() >= limit) {
        setThrottledValue(value);
        lastRan.current = new Date();
      }
    }, limit - (new Date().getTime() - lastRan.current.getTime()));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};

export default useThrottle;


// const throttledSize = useThrottle(size, 1000);