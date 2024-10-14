import {MMKV} from 'react-native-mmkv';

/**
 * Keys used to store data in shared preference.
 * @type {Object<string, string>}
 */
export const sharedPrefKeys = {
  langauge: '@langauge',
  access_token: '@access_token',
  refresh_token: '@refresh_token',
};

/**
 * Shared preference instance
 * @type {MMKV}
 */
const sharedPref: MMKV = new MMKV({
  id: `app-local-sharedPref`,
  // path: `${'USER_DIRECTORY'}/sharedPref`,
  encryptionKey: 'hunter2'
});

// console.log("SharedPref===", sharedPref)

//? if you want to debug sharedPref value then uncomment below
// import {initializeMMKVFlipper} from 'react-native-mmkv-flipper';
// if (__DEV__) {
//   initializeMMKVFlipper({default: sharedPref});
// }

export default sharedPref;