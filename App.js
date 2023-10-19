import { Home } from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Singup from "./components/Singup";
import store from "./store";
import { Provider } from "react-redux";
import { Welcome } from "./components/Welcome";
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signup"
            component={Singup}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="WelcomePage" component={Welcome} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

}
