import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import Styles from './meal-details.style';

const MealDetails = props => {
  // console.log(props.route.name);
  // useEffect(() => {
  //   const unsubscribe = props.navigation.addListener('focus', () => {
  //     props.navigation.goBack();
  //   });
  //   return unsubscribe;
  // }, [props]);

  return (
    <View>
      <Text>Meal Details Screen</Text>
    </View>
  );
};

export default MealDetails;
