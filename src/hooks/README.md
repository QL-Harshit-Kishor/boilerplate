# Hooks

This folder contains custom React hooks that encapsulate reusable logic. These hooks can manage state, perform side effects, and interact with external APIs.

## Available Hooks

##### useAppShare:

`yarn add react-native-share`

Provides a custom hook for sharing content using the `react-native-share` library. It includes a shareContent function that can be used to open the native share dialog, allowing users to share text or other content with other apps.

##### useAppState:

Manages the global state of the application, providing a central store that can be accessed and updated from any component. This hook monitors the app state (active, background, inactive) and provides the current state.

##### useBackHandler:

Handles the back button press event on Android devices, allowing custom behavior such as navigation or confirmation prompts. The provided handler function should return true to indicate that the back press event has been handled and no further action is required.

##### useCopyClipboard:

`yarn add @react-native-clipboard/clipboard`

Provides a custom hook for copying text to the clipboard using `@react-native-clipboard/clipboard` library. The copyToClipboard function returns a promise that resolves with the copied text.

##### useCurrentTime

The useCurrentTime hook provides the current date and time in a React component. It allows you to control whether the time updates periodically or not, based on an optional updateInterval parameter.

##### useDebounce:

Debounce delays the execution of a function until after a certain period has passed since the last time the function was invoked. This is useful for scenarios like search input fields, where you want to wait until the user has finished typing before making an API call.

##### useThrottle:

Throttle ensures a function is called at most once every specified time period, regardless of how often the user triggers the function. This is useful for scenarios like handling scroll events or resizing windows, where you want to limit the rate of execution.

##### useKeyboard:

Manages keyboard events, providing information about the keyboard's visibility, height, and coordinates. Useful for adjusting UI elements when the keyboard is shown or hidden.

##### useNetworkStatus:

`yarn add @react-native-community/netinfo`

Monitors and provides the network connectivity and internet reachability status using the `@react-native-community/netinfo` library. It updates the state based on connectivity changes and logs network status updates.

##### usePermission:

`yarn add react-native-permissions`

Handles permission checking and requesting for both Android and iOS platforms using the `react-native-permissions` library. For each permission check official doc for setup.

##### useRefresh:

Implements pull-to-refresh functionality, allowing users to refresh content by pulling down on a list or scrollable view.

##### useStatusBar:

Provides control over the status bar appearance and behavior, including background color, text color, and visibility.

##### useTimerCountDown:

A custom hook that manages a countdown timer. It takes initial minutes and seconds as parameters and returns the remaining time, along with methods to clear and restart the timer. It uses useIsFocused from @react-navigation/native to handle the timer when the screen is focused or unfocused.
