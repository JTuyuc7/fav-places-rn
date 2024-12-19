# React Native - Expo App
## An application that uses camera and location.

### How to run it?
To run the project, you will need to creat an `.env` file where you need to specify the following variables `EXPO_PUBLIC_API_MAP_KEY` & `EXPO_PUBLIC_MBOX_API_KEY` which they will be used to work with the `expo-image-picker` & `@rnmapbox/maps` respectively, these variables will be used only for development, as for the preview and production builds you will need to configure them in your Expo dashboard project app, once you have configured you will need to install the dependencies by running `npm i`.

Since the proyect uses the `@rnmapbox/maps` library, this needs native code, so you will need to create a preview build to work with the app, (check the expo docs) to create a `preview` build.

### How the app looks?
Some images on how the app looks.

#### Add screen
![Simulator Screenshot - iPhone 16 Pro Max - 2024-12-16 at 23 50 32](https://github.com/user-attachments/assets/d0220ce2-1bef-474d-a3bf-d0afed651d4b)

#### Full screen app (read only) when viewing the place details
![Screenshot_1734414697](https://github.com/user-attachments/assets/ec116024-7027-4b58-80e7-59e8f85e6689)

#### Details screen
![Screenshot_1734414686](https://github.com/user-attachments/assets/a23df813-cd2a-4f5b-8c3f-85bc01c0a54d)

#### Form place, where you can take the image and either a preview of the location or navigate to the page where you can select your location.
![Screenshot_1734414680](https://github.com/user-attachments/assets/bcc76d26-226d-4ac6-a4c2-1624c16b0d83)

#### Launch the camera to take pictures.
![Screenshot_1734414664](https://github.com/user-attachments/assets/7ceec274-300f-403f-8d65-921f7defe6b0)

#### Main page where you can list all your favorite places.
![Screenshot_1734414645](https://github.com/user-attachments/assets/b1b5298e-6594-4351-b7cc-66a7f2493307)
