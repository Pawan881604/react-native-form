import React from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import LoginIcons from "./LoginIcons";
import { LoginForm } from "./LoginForm";
import SingupForm from "./SingupForm";

const Singup = () => {
  return (
    <ScrollView>

    <View style={style.containor}>
      <View>
        <Text style={style.loginTitle}>Sing Up With</Text>
      </View>
      <View styles={style.iconContainor}>
        <View>
          <LoginIcons />
          <SingupForm />
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
    containor: {
        paddingTop: 50,
        paddingLeft:30,
        paddingRight:30,
    },
    loginTitle: {
      fontSize: 24,
      textAlign: "center",
      fontWeight: "bold",
    },
    iconContainor: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }
  });
  
export default Singup;
