import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Favorite, MealDetails} from '../container';

const Stack = createStackNavigator();

const FavoriteStack = () => {
  return (
    <Stack.Navigator initialRouteName="Favorite">
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="MealsDetailsFav" component={MealDetails} />
    </Stack.Navigator>
  );
};

export default FavoriteStack;
