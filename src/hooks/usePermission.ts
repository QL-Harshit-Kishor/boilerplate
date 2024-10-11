import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {PERMISSIONS, PermissionStatus, RESULTS, check, request} from 'react-native-permissions';


const TIMEOUT_DURATION = 500;

interface PermissionHook {
  permissionStatus: PermissionStatus;
  requestPermission: () => Promise<void>;
  checkPermission: () => Promise<void>;
  hasPermission: boolean;
}

const usePermission = ({
  iosPermission,
  androidPermission
}: {
  iosPermission: IosPermissionKeys;
  androidPermission: AndroidPermissionKeys;
}): PermissionHook => {
  const isIOS = Platform.OS === 'ios';
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>('unavailable');
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [requesting, setRequesting] = useState<boolean>(false);

  const platformPermission = isIOS
    ? PERMISSIONS.IOS[iosPermission]
    : PERMISSIONS.ANDROID[androidPermission];

  const checkPermission = async () => {
    try {
      const result = await check(platformPermission);
      setPermissionStatus(result);
      setHasPermission(result === RESULTS.GRANTED);
    } catch (error) {
      console.error('Error checking permission:', error);
    }
  };

  const requestPermission = async () => {
    if (requesting) return; // Avoid multiple requests
    setRequesting(true);
    try {
      const result = await request(platformPermission);
      setPermissionStatus(result);
      setHasPermission(result === RESULTS.GRANTED);
    } catch (error) {
      console.error('Error requesting permission:', error);
    } finally {
      setRequesting(false);
    }
  };

  useEffect(() => {
    checkPermission();
  }, [platformPermission]);

  useEffect(() => {
    if (permissionStatus === RESULTS.DENIED) {
      const timer = setTimeout(() => {
        requestPermission();
      }, TIMEOUT_DURATION);
      return () => clearTimeout(timer);
    }
  }, [permissionStatus]);

  return {hasPermission, permissionStatus, requestPermission, checkPermission};
};

export default usePermission;


// ! Type for android and ios permissions
type AndroidPermissionKeys = keyof typeof ANDROID;
type IosPermissionKeys = keyof typeof IOS;

export const ANDROID = Object.freeze({
  ACCEPT_HANDOVER: 'android.permission.ACCEPT_HANDOVER',
  ACCESS_BACKGROUND_LOCATION: 'android.permission.ACCESS_BACKGROUND_LOCATION',
  ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION',
  ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
  ACCESS_MEDIA_LOCATION: 'android.permission.ACCESS_MEDIA_LOCATION',
  ACTIVITY_RECOGNITION: 'android.permission.ACTIVITY_RECOGNITION',
  ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL',
  ANSWER_PHONE_CALLS: 'android.permission.ANSWER_PHONE_CALLS',
  BLUETOOTH_ADVERTISE: 'android.permission.BLUETOOTH_ADVERTISE',
  BLUETOOTH_CONNECT: 'android.permission.BLUETOOTH_CONNECT',
  BLUETOOTH_SCAN: 'android.permission.BLUETOOTH_SCAN',
  BODY_SENSORS: 'android.permission.BODY_SENSORS',
  BODY_SENSORS_BACKGROUND: 'android.permission.BODY_SENSORS_BACKGROUND',
  CALL_PHONE: 'android.permission.CALL_PHONE',
  CAMERA: 'android.permission.CAMERA',
  GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS',
  NEARBY_WIFI_DEVICES: 'android.permission.NEARBY_WIFI_DEVICES',
  POST_NOTIFICATIONS: 'android.permission.POST_NOTIFICATIONS',
  PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS',
  READ_CALENDAR: 'android.permission.READ_CALENDAR',
  READ_CALL_LOG: 'android.permission.READ_CALL_LOG',
  READ_CONTACTS: 'android.permission.READ_CONTACTS',
  READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE',
  READ_MEDIA_AUDIO: 'android.permission.READ_MEDIA_AUDIO',
  READ_MEDIA_IMAGES: 'android.permission.READ_MEDIA_IMAGES',
  READ_MEDIA_VIDEO: 'android.permission.READ_MEDIA_VIDEO',
  READ_PHONE_NUMBERS: 'android.permission.READ_PHONE_NUMBERS',
  READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE',
  READ_SMS: 'android.permission.READ_SMS',
  RECEIVE_MMS: 'android.permission.RECEIVE_MMS',
  RECEIVE_SMS: 'android.permission.RECEIVE_SMS',
  RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH',
  RECORD_AUDIO: 'android.permission.RECORD_AUDIO',
  SEND_SMS: 'android.permission.SEND_SMS',
  USE_SIP: 'android.permission.USE_SIP',
  UWB_RANGING: 'android.permission.UWB_RANGING',
  WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR',
  WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG',
  WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS',
  WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE',
} as const);

const IOS = Object.freeze({
  APP_TRACKING_TRANSPARENCY: 'ios.permission.APP_TRACKING_TRANSPARENCY',
  BLUETOOTH: 'ios.permission.Bluetooth',
  CALENDARS: 'ios.permission.CALENDARS',
  CAMERA: 'ios.permission.CAMERA',
  CONTACTS: 'ios.permission.CONTACTS',
  FACE_ID: 'ios.permission.FACE_ID',
  LOCATION_ALWAYS: 'ios.permission.LOCATION_ALWAYS',
  LOCATION_WHEN_IN_USE: 'ios.permission.LOCATION_WHEN_IN_USE',
  MEDIA_LIBRARY: 'ios.permission.MEDIA_LIBRARY',
  MICROPHONE: 'ios.permission.MICROPHONE',
  MOTION: 'ios.permission.MOTION',
  PHOTO_LIBRARY: 'ios.permission.PHOTO_LIBRARY',
  PHOTO_LIBRARY_ADD_ONLY: 'ios.permission.PHOTO_LIBRARY_ADD_ONLY',
  REMINDERS: 'ios.permission.REMINDERS',
  SIRI: 'ios.permission.SIRI',
  SPEECH_RECOGNITION: 'ios.permission.SPEECH_RECOGNITION',
  STOREKIT: 'ios.permission.STOREKIT',
} as const);



// const {hasPermission, permissionStatus, requestPermission, checkPermission} = usePermission({
//   iosPermission: 'CAMERA',
//   androidPermission: 'CAMERA'
// });