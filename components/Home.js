import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { LoginForm } from "./LoginForm";
import LoginIcons from "./LoginIcons";

export const Home = () => {
  return (
    <View style={style.containor}>
      <View>
        <Text style={style.loginTitle}>Login With</Text>
      </View>
      <View styles={style.iconContainor}>
        <View>
          <LoginIcons />
          <LoginForm />
        </View>
      </View>
    </View>
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
