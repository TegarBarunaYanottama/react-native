import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

export default function ContohTextInput() {
  const [nama, setNama] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text>Inputkan Nama Anda : </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "yellow",
          borderRadius: 3,
          padding: 5,
        }}
        placeholder="Inputkan Nama Anda...."
        onChangeText={(text) => setNama(text)}
      ></TextInput>
      <Text style={{ marginTop: 10 }}>Halo, {nama}</Text>
    </View>
  );
}
