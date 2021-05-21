import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

import {Icons} from '../../components';

import Styles from './category.style';

const Category = props => {
  return (
    <View style={Styles.container}>
      <Text>
        Category Screen <Icons icon="favorite" />
      </Text>
      <Button
        title="Meals"
        onPress={() => props.navigation.navigate('Meals')}
      />
    </View>
  );
};

export default Category;
