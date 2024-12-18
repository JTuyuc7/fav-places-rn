// app.config.js

module.exports = ({ config }) => {
  const mapBoxApiKey = process.env.MAP_BOX_API_KEY
  const googleKey = process.env.API_MAP_KEY
  return {
    expo: {
      name: 'Fav Places',
      slug: 'fav-places',
      version: '1.0.1',
      orientation: 'portrait',
      icon: './assets/images/icon.png',
      scheme: 'myapp',
      userInterfaceStyle: 'automatic',
      newArchEnabled: true,
      ios: {
        buildNumber: '1.0.1',
        supportsTablet: true,
        bundleIdentifier: 'com.james-tuyuc.favplaces'
      },
      android: {
        versionCode: 1,
        adaptiveIcon: {
          foregroundImage: './assets/images/adaptive-icon.png',
          backgroundColor: '#1aacf0'
        },
        permissions: [
          'android.permission.RECORD_AUDIO',
          'android.permission.ACCESS_COARSE_LOCATION',
          'android.permission.ACCESS_FINE_LOCATION'
        ],
        package: 'com.james_tuyuc.favplaces'
      },
      web: {
        bundler: 'metro',
        output: 'static',
        favicon: './assets/images/favicon.png'
      },
      plugins: [
        'expo-router',
        [
          'expo-splash-screen',
          {
            image: './assets/images/splash-icon.png',
            imageWidth: 200,
            resizeMode: 'contain',
            backgroundColor: '#1aacf0'
          }
        ],
        [
          'expo-image-picker',
          {
            cameraPermission: 'The app needs access to your camera to take photos.'
          }
        ],
        [
          'expo-location',
          {
            locationAlwaysAndWhenInUsePermission:
              'The app needs access to your location to show you where you are on the map.'
          }
        ],
        [
          '@rnmapbox/maps',
          {
            // Inject the secret from an environment variable set by EAS
            // instead of using a literal "${MAP_BOX_API_KEY}" string
            RNMapboxMapsDownloadToken: mapBoxApiKey
          }
        ],
        'expo-sqlite'
      ],
      experiments: {
        typedRoutes: true
      },
      extra: {
        router: {
          origin: false
        },
        eas: {
          projectId: '7ea1bad9-1987-446d-b67f-53f1f118ccc3'
        },
        API_MAP_KEY: googleKey,
        MAP_BOX_API_KEY: mapBoxApiKey
      }
    }
  }
}
