import React from 'react';
import {View, Text, Button} from 'react-native';

import Styles from './meals.style';

const Meals = props => {
  return (
    <View>
      <Text>Meals Screen</Text>
      <Button
        title="Detail"
        onPress={() => props.navigation.navigate('MealDetails')}
      />
    </View>
  );
};

export default Meals;
