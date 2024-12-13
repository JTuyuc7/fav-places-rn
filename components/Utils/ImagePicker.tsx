import { Alert, Button, View } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';

function ImagePicker() {
  const [cameraPermissionInformation, requestedPermission] = useCameraPermissions();

  const verifyPermissions = async () => {
    const response = await requestedPermission();
    console.log("🚀 ~ verifyPermissions ~ response:", response)
    // console.log(cameraPermissionInformation?.status, 'cameraPermissionInformation')
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestedPermission();
      return permissionResponse.granted
    }

    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert('Permission Denied', 'You need to grant camera permissions to use this app', [{ text: 'Okay' }]);
      return false;
    }

    return true;
  }
  const takeImageHandler = async () => {
    console.log('camera pressed')
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    console.log(image, 'image')
  }

  return (
    <View>

      <View>

      </View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  )
}

export default ImagePicker;