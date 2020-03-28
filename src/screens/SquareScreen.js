import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload};
    default:
      return;
  }
}

const SquareScreen = () => {
  const COLOR_INCREMENT = 15;
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
  const { red, green, blue } = state
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);

  // const setColor = (color, change) => {
  //   switch(color) {
  //     case 'red':
  //       red + change > 255 || red + change < 0 ? null : setRed(red+change);
  //       return;
  //     case 'green':
  //       green + change > 255 || green + change < 0 ? null : setGreen(green+change);
  //       return;
  //     case 'blue':
  //       blue + change > 255 || blue + change < 0 ? null : setBlue(blue+change);
  //       return;
  //     default:
  //       return;
  //   }
  // };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
      />
    <View style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
  );
};

const styles = StyleSheet.create({

});


export default SquareScreen;
