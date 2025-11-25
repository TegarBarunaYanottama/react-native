import React from "react";
import { ScrollView, Text } from "react-native";

export default function ScrollViewExample() {
  return (
    <ScrollView style={{ padding: 20 }}>
      {[...Array(20)].map((_, i) => (
        <Text key={i} style={{ marginVertical: 10 }}>
          Ini item ke-{i + 1}
        </Text>
      ))}
    </ScrollView>
  );
}
