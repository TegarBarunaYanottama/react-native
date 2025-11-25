import * as React from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>ini adalah halaman HOME</Text>
      <Button
        title="Detail"
        onPress={() => navigation.navigate("Detail")}
      ></Button>
    </View>
  );
}

function DetailScreen() {
  return (
    <View>
      <Text>ini adalah halaman Detail</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
