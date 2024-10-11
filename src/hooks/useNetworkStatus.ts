import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import React, {useEffect} from 'react';

const useNetworkStatus = () => {
  const [isConnected, setIsConnected] = React.useState<boolean>(true);
  const [isInternetReachable, setIsInternetReachable] = React.useState<boolean | null | undefined>(undefined);

  const handleConnectivityChange = (state: NetInfoState) => {
    setIsConnected(state.isConnected != null && state.isConnected);
    setIsInternetReachable(state.isInternetReachable);
    // eslint-disable-next-line no-unused-vars
    const {details, ...restState} = state;
    console.error('Network Status==>', restState);
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);
    // Cleanup subscription on component unmount
    return () => {
      unsubscribe();
    };
  }, []);

  return {isConnected, isInternetReachable};
};

export default useNetworkStatus;