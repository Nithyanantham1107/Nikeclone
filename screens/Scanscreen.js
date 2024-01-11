import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image ,TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { value } from '../global_var/Globe';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';



export default function Scanscreen() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [val, setval] = useState([]); 
  const navigation =useNavigation();


  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);
  const switchscreen=()=> {
    setPhoto(undefined)
    navigation.navigate("scanload")
  }
const uploading_image=async(photo1)=>{
  

  await axios
    .post(value.base+'/image',  {
 
      buffer:photo1.base64
      
     
   })
    .then((res) => {
      console.log(res.data[0].class);
    setval(res.data[0].class)
    console.log(val)
    }).catch((err)=>{
      
      console.log(err);
    })
}

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

const takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
    console.log(newPhoto.uri)
    uploading_image(newPhoto);
   
    
  };
  

  if (photo) {
   

    return (
    
      
      <SafeAreaView style={{ flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'}}>
        <Image style={{  alignSelf: 'stretch',
    flex: 1}} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
      <View style={{backgroundColor:"white"}}>
        
     <Text style={{fontWeight:"800",color:"#5A4AE3",fontSize:30,marginVertical:20}}>Its {val}!!</Text>
    
     <TouchableOpacity style={{backgroundColor:"black",height:60,width:150,justifyContent:"center",alignItems:"center",borderRadius:20,alignSelf:"center"}} 
         onPress={switchscreen} >
          
          <Text style={{fontWeight:"800",color:"white",fontSize:20}}> Back to Home</Text>
          </TouchableOpacity> 
        </View> 
    
      </SafeAreaView>
    );
  }

  return (
    <Camera style={{ flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',}} ref={cameraRef}>
      <View style={ { backgroundColor: '#fff',marginTop:500}}>
        <TouchableOpacity style={{backgroundColor:"white",height:60,width:150,justifyContent:"center",alignItems:"center",borderRadius:30}} 
         onPress={takePic} >
          
          <Text style={{fontWeight:"800",color:"#5A4AE3",fontSize:20}}> scan</Text>
          </TouchableOpacity> 
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

