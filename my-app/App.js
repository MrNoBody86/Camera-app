import { StyleSheet, Text, View } from 'react-native';
import { CameraView , CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const [hasCameraPermissions, setHasCameraPermissions] = useState(null);
  const [image, setImage] = useState(null);
  const [facing, setFacing] = useState(CameraView.);
  const [flash, setFlash] = useState('off');
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await  CameraView.requestCameraPermissionsAsync();
      setHasCameraPermissions(cameraStatus.status === 'granted');
    })();
  
  }, [])
  

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
