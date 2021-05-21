import React from 'react';
import {View, Text, Button} from 'react-native';

import Styles from './favorite.style';

const Favorite = props => {
  return (
    <View>
      <Text>Favorite Screen</Text>
      <Button
        title="Detail"
        onPress={() => props.navigation.navigate('MealsDetailsFav')}
      />
    </View>
  );
};

export default Favorite;
