import React from "react";
import { View,StyleSheet,Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const LoginIcons = () => {
  return (
   <>
    <View style={style.loginIcon}>
          <FontAwesome
            style={style.icon}
            name="apple"
            color={"#000"}
            size={30}
          />
          <FontAwesome
            style={style.icon}
            name="facebook"
            color={"#000"}
            size={30}
          />
          <FontAwesome
            style={style.icon}
            name="twitter"
            color={"#000"}
            size={30}
          />
        </View>
        <View style={style.orContainor} >
          <View style={style.orBefore}></View>
          <View style={style.content}>
            <Text >Or</Text>
          </View>
          <View style={style.orAfter} ></View>
        </View>
        <View></View>
   </>
  );
};

const style = StyleSheet.create({
   
    loginIcon: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 20,
      gap: 20,
    },
    icon: {
      borderWidth: 1,
      borderRadius: 5,
      width: 60,
      borderColor: "#808080",
      textAlign: "center",
      paddingTop: 12,
      paddingBottom: 12,
    },
    orContainor: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 20,
    },
    orBefore: {
      flex: 1,
      height: 1,
      backgroundColor: "black", // Adjust color as needed
    },
    content: {
      paddingHorizontal: 10,
    },
    orAfter: {
      flex: 1,
      height: 1,
      backgroundColor: "#808080", // Adjust color as needed
    },
  });
  

export default LoginIcons;
