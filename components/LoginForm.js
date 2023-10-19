import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Zocial from "react-native-vector-icons/Zocial";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Button, CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../action/UserAction";

export const LoginForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user, loading, error, isAuthenticated } = useSelector(
    (state) => state.userLogin
  );

  const handleSignupClick = () => {
    navigation.navigate("signup");
  };
  //-------check usestate
  const [isChecked, setIsChecked] = useState(false);
  const [isVisiable, setIsVisiable] = useState(true);

  //-------input usestate
  const [inputValue, setINputValue] = useState({
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState({
    email: false,
    password: "",
  });

  //-----handle input text
  const handleChangeText = (field, value) => {
    setINputValue({ ...inputValue, [field]: value });
  };

  //----handle checkbox
  const handleCheckBoxToggle = () => {
    setIsChecked(!isChecked);
  };

  const isValidEmail = (email) => {
    const vEmail = email.includes("@") && email.includes(".");

    if (!vEmail) {
      return setIsError((e) => ({ ...e, email: "Please enter a valid email" }));
    } else {
      return setIsError((e) => ({ ...e, email: null }));
    }
  };

  const isValidPassword = (password) => {
    if (password.length < 6) {
      return setIsError((e) => ({
        ...e,
        password: "Password should be greater than 6 characters",
      }));
    } else {
      return setIsError((e) => ({ ...e, password: null }));
    }
  };

  //----- handle submit form
  const loginSubmit = () => {
    isValidEmail(inputValue.email);
    isValidPassword(inputValue.password);
    if (isError.email || isError.password) {
      console.log("error");
    } else {
      dispatch(Login(inputValue.email, inputValue.password));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("WelcomePage");
    }
  }, [user, isAuthenticated]);

  return (
    <>
      <View style={style.inputField}>
        <Text style={style.inputLabel}>Email address</Text>
        <View style={style.containor}>
          <Zocial style={style.icon} name="email" color={"#000"} size={15} />
          <TextInput
            placeholder="Enter your email"
            keyboardType="email-address"
            onChangeText={(e) => handleChangeText("email", e)}
          />
        </View>
        {isError.email ? (
          <Text style={style.errorText}>{isError.email}</Text>
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
            placeholder="Enter your password"
            secureTextEntry={isVisiable}
            onChangeText={(e) => handleChangeText("password", e)}
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
          style={{ marginTop: 80 }}
          onPress={loginSubmit}
          title={"Login"}
        />
    
      <View>
        <Text>
          Dont have account?
          <TouchableOpacity onPress={handleSignupClick}>
            <Text>Create Account</Text>
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
  icon: {
    fontSize: 20,
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
