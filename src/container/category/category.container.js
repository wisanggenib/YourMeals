import React from 'react';
import {View, Text, Button} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';

import Styles from './category.style';

const Category = props => {
  return (
    <View style={Styles.container}>
      <Text>Category Screen</Text>
      <Button
        title="Meals"
        onPress={() => props.navigation.navigate('Meals')}
      />
      <FontAwesomeIcon icon={icon.faStarOfLife} />
    </View>
  );
};

export default Category;
