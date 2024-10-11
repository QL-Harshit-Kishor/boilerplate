import {useIsFocused} from '@react-navigation/native';
import {useEffect, useLayoutEffect, useRef, useState} from 'react';

const useTimerCountDown = ({
  minutes,
  seconds
}: {
  minutes: number,
  seconds: number;
}) => {
  const [remainingMinutes, setRemainingMinutes] = useState(minutes);
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);
  const isFocused = useIsFocused();

  const timeRef = useRef<NodeJS.Timeout | null>();

  const isTimerActive = remainingMinutes > 0 || remainingSeconds > 0;
  const countdown = () => {
    if (remainingSeconds > 0) {
      setRemainingSeconds(remainingSeconds - 1);
    }
    if (remainingSeconds === 0) {
      if (remainingMinutes === 0) {
        clearTimer();
      } else {
        setRemainingSeconds(59);
        setRemainingMinutes(remainingMinutes - 1);
      }
    }
  };
  const clearTimer = () => {
    if (timeRef.current !== null) {
      clearInterval(timeRef.current);
    }
  };
  const restartTimer = () => {
    setRemainingMinutes(minutes);
    setRemainingSeconds(seconds);
  };

  // Clear timeout on focusing screen (this will fix bug on back)
  useLayoutEffect(() => {
    if (isFocused && timeRef.current != null) {
      clearInterval(timeRef.current);
      setRemainingMinutes(0);
      setRemainingSeconds(0);
    }
  }, [isFocused]);

  // Subscribe timer here
  useEffect(() => {
    timeRef.current = setInterval(countdown, 1000);
    // Return a cleanup function to clear the interval
    return () => clearTimer();
  }, [remainingSeconds]);

  return {
    remainingMinutes,
    remainingSeconds,
    isTimerActive,
    clearTimer,
    restartTimer
  };
};

export default useTimerCountDown;


// Usefull for countdown timer during OTP verification