const appName = 'Klimaton'
export const configuration = {
  APP_VERSION: '0.0.1',
  VERSION_CODE: 1,
  bundleName: 'com.klimaton.klimaton',
}

export default {
  'expo': {
    'name': appName,
    'slug': appName,
    'version': configuration.APP_VERSION,
    'orientation': 'portrait',
    'icon': './assets/icon.png',
    'backgroundColor': '#F59E0B',
    'primaryColor': '#F59E0B',
    'splash': {
      'image': './assets/splash.png',
      'resizeMode': 'cover',
      'backgroundColor': '#F59E0B',
    },
    'updates': {
      'enabled': false,
    },
    'assetBundlePatterns': [
      '**/*',
    ],
    'ios': {
      'bundleIdentifier': configuration.bundleName,
      'buildNumber': configuration.APP_VERSION,
      'supportsTablet': false,
      'userInterfaceStyle': 'light',
    },
    'android': {
      'package': configuration.bundleName,
      'versionCode': configuration.VERSION_CODE,
      'userInterfaceStyle': 'light',
      'permissions': [],
      'adaptiveIcon': {
        'backgroundColor': '#F59E0B'
      },
    },
    'web': {
      'favicon': './assets/favicon.png'
    },
    'userInterfaceStyle': 'light',
    "plugins": [],
  }
}