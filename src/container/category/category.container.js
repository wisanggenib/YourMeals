import React from 'react';
import {View, Text, Button} from 'react-native';

import Styles from './category.style';

const Category = props => {
  return (
    <View style={Styles.container}>
      <Text>Category Screen</Text>
      <Button
        title="Meals"
        onPress={() => props.navigation.navigate('Meals')}
      />
    </View>
  );
};

export default Category;
