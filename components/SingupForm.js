import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,    
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Zocial from "react-native-vector-icons/Zocial";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { Button, CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const SingupForm = () => {
  const navigation = useNavigation();
  const handleSignupClick = () => {
    navigation.navigate("home");
  };

  //-------check usestate
  const [isChecked, setIsChecked] = useState(false);
  const [isVisiable, setIsVisiable] = useState(true);

  //-------input usestate
  const [inputValue, setINputValue] = useState({
    email: "",
    name: "",
    phoneno: "",
    password: "",
  });
  const [isError, setIsError] = useState({
    email: "",
    name: "",
    phoneno: "",
    password: "",
  });

  //-----handle input text
  const handleChangeText = (field, value) => {
    setINputValue({ ...inputValue, [field]: value });
  };

  const validateField = (type, value) => {
    console.log(type, value);
    switch (type) {
      case "email":
        const isValidEmail = value.includes("@") && value.includes(".");
        return isValidEmail
          ? checkError("email", null)
          : checkError("email", "Please enter a valid email");

      case "password":
        return value.length >= 6
          ? checkError("password", null)
          : checkError(
              "password",
              "Password should be greater than 6 characters"
            );

      case "name":
        return value
          ? checkError("name", null)
          : checkError("name", "Please enter your name");
      case "phoneno":
        return value
          ? checkError("phoneno", null)
          : checkError("phoneno", "Please enter your valid no");

      default:
        return null;
    }
  };
  function checkError(field, error) {
    setIsError((e) => ({
      ...e,
      [field]: error,
    }));
  }

  const loginSubmit = () => {
    const emailError = validateField("email", inputValue.email);
    const nameError = validateField("name", inputValue.name);
    const phonenoError = validateField("phoneno", inputValue.phoneno);
    const passwordError = validateField("password", inputValue.password);
  };

  //----handle checkbox
  const handleCheckBoxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <View style={style.inputField}>
        <Text style={style.inputLabel}>Full name</Text>
        <View style={style.containor}>
          <Entypo style={style.icon} name="user" color={"#000"} size={15} />
          <TextInput
            style={style.inputArea}
            onChangeText={(e) => handleChangeText("name", e)}
            placeholder="Enter your full name"
          />
        </View>
        {isError.name ? (
          <Text style={style.errorText}>{isError.name}</Text>
        ) : null}
      </View>

      <View style={style.inputField}>
        <Text style={style.inputLabel}>Email address</Text>
        <View style={style.containor}>
          <Zocial style={style.icon} name="email" color={"#000"} size={15} />
          <TextInput
            style={style.inputArea}
            onChangeText={(e) => handleChangeText("email", e)}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>
        {isError.email ? (
          <Text style={style.errorText}>{isError.email}</Text>
        ) : null}
      </View>
      <View style={style.inputField}>
        <Text style={style.inputLabel}>Phone no</Text>
        <View style={style.containor}>
          <FontAwesome
            style={style.icon}
            name="phone"
            color={"#000"}
            size={15}
          />
          <TextInput
            style={style.inputArea}
            onChangeText={(e) => handleChangeText("phoneno", e)}
            placeholder="Enter your phone no"
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
        {isError.phoneno ? (
          <Text style={style.errorText}>{isError.phoneno}</Text>
        ) : null}
      </View>
      <View style={style.inputField}>
        <Text style={style.inputLabel}>Password</Text>
        <View style={style.containor}>
          <FontAwesome
            style={style.icon}
            name="lock"
            color={"#000"}
            size={15}
          />
          <TextInput
            style={style.inputArea}
            secureTextEntry={isVisiable}
            onChangeText={(e) => handleChangeText("password", e)}
            placeholder="Enter your password"
            keyboardType="email-address"
          />
          {isVisiable ? (
            <Entypo
              onPress={(e) => {
                setIsVisiable(false);
              }}
              style={style.icon}
              name="eye"
              color={"#000"}
              size={15}
            />
          ) : (
            <Entypo
              onPress={(e) => {
                setIsVisiable(true);
              }}
              style={style.icon}
              name="eye-with-line"
              color={"#000"}
              size={15}
            />
          )}
        </View>
        {isError.password ? (
          <Text style={style.errorText}>{isError.password}</Text>
        ) : null}
      </View>
      <View>
        <CheckBox
          title="Agree to Terms and Conditions"
          checked={isChecked}
          onPress={handleCheckBoxToggle}
        />
      </View>
      <Button
        disabled={!isChecked}
        onPress={loginSubmit}
        style={{ marginTop: 80 }}
        title={"Sing up"}
      />
      <View>
        <Text>
          Dont have account?
          <TouchableOpacity onPress={handleSignupClick}>
            <Text>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  inputLabel: {
    marginBottom: 5,
    fontSize: 16,
  },
  icon:{
    fontSize:20
  },
  containor: {
    flexDirection: "row", // Display children in a row
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#808080",
    padding: 8,
    gap: 5,
  },
  inputField: {
    marginBottom: 15,
  },
  errorText: {
    color: "red",
  },
  inputArea: {
    width: 260,
    overflow: "hidden",
  },
});

export default SingupForm;
