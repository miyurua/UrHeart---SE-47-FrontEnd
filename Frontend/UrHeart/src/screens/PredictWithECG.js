import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import MENU from "../../assets/images/menu.png";
import AdaLOGO from "../../assets/images/adaptive-logo.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const DoctorListScreen = () => {
  const { height } = useWindowDimensions();
  const fontHeight = height * 0.0218;
  const buttonHeight = height * 0.075;
  const buttonMargin = (height * 0.018) / 2;

  const navigation = useNavigation();

  

  const onMenuPressed = () => {
    navigation.toggleDrawer();
  };

  const onProcessPress = () => {
    
  };
 
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const[ image, SetImage] = useState(null);
  useEffect(() => {
      (async () => {
          const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
          setHasGalleryPermission(galleryStatus.status === 'granted' );

      })();
  }, []);

  const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images, 
          allowsEdting: true, 
          aspect: [4,3],
          quality: 1,
      });
      console.log(result);
      if (!result.canselled){
          SetImage(result.uri);
      }
  };
  if (hasGalleryPermission === false){
      return <Text>No access to Internal Storage</Text>
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { paddingTop: height * 0.08 }]}>
        <View style={[styles.header, { height: height * 0.08 }]}>
          <TouchableOpacity
            style={{ height: height * 0.03, maxHeight: 55, width: "8%" }}
            onPress={onMenuPressed}
          >
            <Image
              source={MENU}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={{ height: height * 0.07, maxHeight: 55, width: "40%" }}>
            <Image
              source={AdaLOGO}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
        </View>

        <ScrollView
          style={{ height: height * 0.889, width: "100%", marginTop: 25 }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              paddingHorizontal: "8%",
            }}
          >
        <View style={{flex:1, justifyContent: 'center'}}>
         <Button title= 'Pick Image'onPress={() => pickImage()} style={{marginTop:30}} />
         {image && <Image source={{uri: image}} style={{Flex:1/2}}/>}
        </View>
            
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "8%",
    justifyContent: "space-between",
  },
});

export default DoctorListScreen;
