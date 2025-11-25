import React from "react";
import { FlatList, Text, View } from "react-native";

const dataMhs = [
  { id: "1", nama: "Agus" },
  { id: "2", nama: "Mawar" },
  { id: "3", nama: "Melati" },
  { id: "4", nama: "Indah" },
];

export default function FlatListExample() {
  return (
    <FlatList
      data={dataMhs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
          }}
        >
          <Text>{item.nama}</Text>
        </View>
      )}
    />
  );
}
