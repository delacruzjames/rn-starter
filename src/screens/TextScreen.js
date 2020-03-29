import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('')

  return (
    <View>
      <Text>Enter Password: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newPasswordVal => setPassword(newPasswordVal)}
      />
      { password.length <= 6 ? <Text>Password must be more than 6 character</Text> : null}
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
