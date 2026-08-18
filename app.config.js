module.exports = {
  expo: {
    name: "controlPanel",
    slug: "controlPanel",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "controlpanelfrontapp",
    userInterfaceStyle: "automatic",
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      predictiveBackGestureEnabled: false,
      package: "com.gabrielpossela.controlPanelfrontApp",
      googleServicesFile:
        process.env.GOOGLE_SERVICES_JSON || "./google-services.json",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      [
        "expo-secure-store",
        {
          configureAndroidBackup: true,
          faceIDPermission: "Permite usar o FaceId",
        },
      ],
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission: "Permitir usar localização",
        },
      ],
      [
        "expo-camera",
        {
          cameraPermission: "Permitir acesso à câmera",
          microphonePermission: "Permitir acesso ao microfone",
          recordAudioAndroid: true,
          barcodeScannerEnabled: true,
        },
      ],
      [
        "expo-notifications",
        {
          icon: "./assets/images/icon.png",
          color: "#ffffff",
          defaultChannel: "default",
          enableBackgroundRemoteNotifications: true,
        },
      ],
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      "expo-sqlite",
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: "5a11032a-6618-4cd4-8f77-0013e56238e9"
      },
    },
    owner: "gabrielpossela",
  },
};