import {useState, useEffect} from 'react';

const useCurrentTime = (updateInterval: number | null = 1000) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    if (updateInterval === null) {
      // No interval updates, return the current time immediately
      setCurrentTime(new Date());
      return;
    }

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, updateInterval);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [updateInterval]);

  return currentTime;
};

export default useCurrentTime;


// const currentTime = useCurrentTime(1000);