# Assets

This folder contains all static assets for the project such as images, fonts, icons, and any other media files. Organize the assets in subfolders for easier access and management.

### Subfolders:

1. #### **appIcon** -

This subfolder contains the application's icons, used for the app's launcher icon, notification icons, and other representations of the app. You can replace your app icon with the same name.

To generate the app icon, add the following script in package.json if it does not already exist:

```sh
 "app-icon": "npx rn-ml appicon -s src/assets/appIcon/app.png",
```

And then run the following script:

```sh
npm run app-icon
```

Article - https://medium.com/@harshitkishor2/crafting-app-icons-in-react-native-for-android-and-ios-a097cecc5937

2. #### **fonts** -

This subfolder contains all custom font files used in the application. Ensure to include the font files in various formats (e.g., .ttf, .otf) for compatibility across different platforms.

**Add Custom Fonts And Vector Icons**

This boilerplate already includes a setup for react-native-vector-icons. If you encounter any issues, you can verify or re-setup from here -
https://github.com/oblador/react-native-vector-icons#installation

For custom font installation, refer to this article -
https://medium.com/@harshitkishor2/harnessing-custom-fonts-in-your-react-native-project-5ae98fbaa98c

Finally, run `npx react-native-asset` to link custom fonts.

3. #### **images** -

This subfolder contains image files used in the application. Organize images into further subfolders if needed (e.g., backgrounds, logos, buttons).

For Images and gif we use `react-native-fast-image` where beneficial, enhancing performance especially with larger images or gifs

```javascript
yarn add react-native-fast-image
```

Article - https://medium.com/@harshitkishor2/supercharge-your-apps-image-performance-with-react-native-fast-image-3e9e1a74c141

4. #### **lottie**

This subfolder contains Lottie animation files (.json) and GIF files. These animations can be used to add dynamic and visually appealing effects to the app.

For Lottie files we use `lottie-react-native`

    yarn add lottie-react-native

Use Custom Component For better performance created under component folder.

5. #### **svg**

This subfolder contains SVG files. SVG (Scalable Vector Graphics) files are used for vector images that can scale without losing quality.
To learn how to use SVG images, check this article.
Article - https://medium.com/@harshitkishor2/leveraging-svg-in-react-native-a-comprehensive-guide-7f02b7bb9802

### Example structure:

    assets/
      appIcon/
        app.png
      fonts/
        Roboto/
          Roboto-Regular.ttf
        Satoshi/
          Satoshi-Regular.ttf
      images/
        person.png
        backgrounds/
          background1.png
      lottie/
        loader.json
        loading.gif
      svg/
        app.svg
      index.ts

### How to Use

All assets are imported through the `index.ts` file for better management and cleaner imports across the project. Here is how to structure and use the `index.ts` file for importing assets:

#### `index.ts` File Structure

Export all assets from it:

```typescript
// Import all Svg Components from here
import {default as LoginSvg} from './svg/login.svg';

const SvgConst = {
  LoginSvg,
};

// Import all Fonts from here
const FontConst = {
  Roboto: {
    regular: 'Roboto-Regular',
  },
};

// Import all Lottie path from here
const LottieConst = {
  CONGRATS: require('./lottie/congrats.json'),
};

// Import all gif path from here
const GifConst = {
  CONGRATS: require('./lottie/congrats.json'),
};

// Import all Image path from here
const ImageConst = {
  PERSON: require('./images/person.png'),
};

// Consolidated export for easier access
const Assets = {
  font: FontConst,
  lottie: LottieConst,
  gif: GifConst,
  image: ImageConst,
  svg: SvgConst,
};

export default Assets;
```

### Example

```typescript
import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import Assets from './assets';
import {CFastImage, CIcon, CLottie} from './components';
import {IconType} from './components/CIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: Assets.font.Handlee.regular,
          fontSize: 18,
          color: 'red',
        }}>
        App
      </Text>
      <Assets.svg.LoginSvg height={50} width={50} />
      <CFastImage source={Assets.image.personPng} />
      <CFastImage source={Assets.gif.LoaderGif} />
      <CIcon
        type={IconType.MaterialIcons}
        name={'delete'}
        color={'red'}
        size={50}
      />
      <CLottie
        style={{
          height: 150,
          width: 150,
        }}
        autoPlay
        source={Assets.lottie.congratsLottie}
      />
    </View>
  );
};

export default App;
```
