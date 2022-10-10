import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import Input from "./components/Input";
import { Fruit, Fruits } from "./data";
import Item from "./components/Listitem";

export default function App() {
  const [fruits, setFruits] = useState<Fruit[] | null>(null);

  useEffect(() => {
    (() => {
      setFruits(
        Fruits.sort((a, b) => {
          return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
        })
      );
    })();
  }, [])

  function handleSearch(text: string){
    const fruits: Fruit[] = Fruits.filter((fruit) => fruit.name.includes(text));
    setFruits(fruits);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Input
          icon="md-search"
          placeholder="Search"
          onChangeText={(text) => handleSearch(text)}
        />
        <FlatList
        style={{marginVertical: 10}}
          data={fruits}
          renderItem={({ item }) => (
            <Item id={item.id} name={item.name} price={item.price} />
          )}
        />
        <View>
          <Input icon="ios-add-circle-outline" placeholder="Fruit Name" />
          <Input icon="ios-add-circle-outline" placeholder="Fruit Price" />
          <TouchableOpacity
            style={{
              alignSelf: "center",
              backgroundColor: "rgba(81,135,200,1)",
              padding: 10,
              paddingHorizontal: 20,
              borderRadius: 6,
              marginVertical: 10
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
});
