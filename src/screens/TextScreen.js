import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('')

  return (
    <View>
      <Text>Enter Name: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newNameVal => setName(newNameVal)}
      />
      <Text>Your name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 30,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
