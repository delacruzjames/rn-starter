import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Screen"
      />
      <Button
        onPress={() => navigation.navigate('Lists')}
        title="Go to ListScreen"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to ImageScreen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
