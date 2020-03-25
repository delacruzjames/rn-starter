// PART 1 import libraries we need to create a component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// PART 2 create a component - a function the returns some JSX
const ComponentsScreen = () => {
  const name = "James"

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.textStyle2}>My name is  {name}</Text>
    </View>
  );
};

// PART 3 create a StyleSheet to style our component
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  textStyle2: {
    fontSize: 20
  }
});

// PART 4 export the component so we can use it else where in our project
export default ComponentsScreen;
