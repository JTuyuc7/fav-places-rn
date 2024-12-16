import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import OutlineButton from "../ui/OutlineButton";

interface ImagePickerProps {
  onTakeImage: (imagePath: string) => void;
}

function ImagePicker({ onTakeImage }: ImagePickerProps): JSX.Element {
  const [imageObject, setImageObject] = useState<string>();
  const [cameraPermissionInformation, requestedPermission] = useCameraPermissions();

  const verifyPermissions = async () => {
    const response = await requestedPermission();
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

    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });

    setImageObject(image?.assets?.[0]?.uri);
    onTakeImage(image?.assets?.[0]?.uri as string);
  }


  let imagePreview = <Text>No Image taken yet.</Text>;
  if (imageObject) {
    imagePreview = <Image source={{ uri: imageObject }} style={styles.image} />
  }

  return (
    <View>
      <View style={styles.imagePreview}>
        {imagePreview}
      </View>
      <OutlineButton color={Colors.primary100} onPress={takeImageHandler} iconName="camera" size={22}> Take Image</OutlineButton>
    </View>
  )
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 5,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})