import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        score="8"
        imageSource={require('../../assets/forest.jpg')}
      />
      <ImageDetails
        title="Beach"
        score="9"
        imageSource={require('../../assets/beach.jpg')}
      />
      <ImageDetails
        title="Mountain"
        score="10"
        imageSource={require('../../assets/mountain.jpg')}
      />
    </View>
  );
};


export default ImageScreen;
