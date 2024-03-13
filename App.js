import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./components/Home";
import Store from "./components/Store";
import Login from "./components/Login";
import Register from "./components/Register";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./components/Splash";
import Favourites from "./components/Favourite";
const Tab = createBottomTabNavigator();
const Tab2 = createBottomTabNavigator();
const Stack = createStackNavigator();
import { NetworkContext } from "./exports";
import Reserve from "./components/Reserve";
import OrderList from "./components/OrderList";
import StoreSide from "./components/StoreSide";
import StoreCamera from "./components/StoreCamera";
import StoreOrderDetails from "./components/StoreOrderDetails";
import OrderStore from "./components/OrderStore";
import Settings from "./components/Settings";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          screenOptions={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          screenOptions={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          screenOptions={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="TabNav"
          component={function Main({ route }) {
            return (
              <NetworkContext.Provider value={route}>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                  <Tab.Screen
                    name="Home"
                    component={Home}
                    screenOptions={{ gestureEnabled: false }}
                  />
                  <Tab.Screen
                    name="Favourites"
                    component={Favourites}
                    screenOptions={{ gestureEnabled: false }}
                  />
                  <Tab.Screen
                    name="Orders"
                    component={OrderList}
                    screenOptions={{ gestureEnabled: false }}
                  />
                  <Tab.Screen
                    name="Settings"
                    component={Settings}
                    screenOptions={{ gestureEnabled: false }}
                  />
                </Tab.Navigator>
              </NetworkContext.Provider>
            );
          }}
          screenOptions={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="TabNav2"
          component={function Main2({ route }) {
            return (
              <NetworkContext.Provider value={route}>
                <Tab2.Navigator screenOptions={{ headerShown: false }}>
                  <Tab2.Screen
                    name="StoreSide"
                    component={StoreSide}
                    screenOptions={{ gestureEnabled: false }}
                  />
                  <Tab2.Screen
                    name="Camera"
                    component={StoreCamera}
                    screenOptions={{ gestureEnabled: false }}
                  />
                  <Tab2.Screen
                    name="StoreOrder"
                    component={OrderStore}
                    screenOptions={{ gestureEnabled: false }}
                  />
                  <Tab2.Screen
                    name="Settings"
                    component={Settings}
                    screenOptions={{ gestureEnabled: false }}
                  />
                </Tab2.Navigator>
              </NetworkContext.Provider>
            );
          }}
          screenOptions={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Store"
          component={Store}
          screenOptions={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Reserve"
          component={Reserve}
          screenOptions={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="StoreOrderDetails"
          component={StoreOrderDetails}
          screenOptions={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
