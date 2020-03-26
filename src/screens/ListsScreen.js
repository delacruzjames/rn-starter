// PART 1 import libraries we need to create a component
import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListsScreen = () => {
  const friends = [
    {name: "friend #1", age: "30" },
    {name: "friend #2", age: "23" },
    {name: "friend #3", age: "23" },
    {name: "friend #4", age: "28" },
    {name: "friend #5", age: "24" }
  ]
  return (
    <FlatList
      keyExtractor={friend => friend.name }
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
      }}
    />
    // <View>
    //   <Text>ListScreen</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    marginVertical: 20
  }
});

export default ListsScreen;
