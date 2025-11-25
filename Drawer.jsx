import * as React from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>ini adalah halaman HOME</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Text>ini adalah halaman Profile</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
