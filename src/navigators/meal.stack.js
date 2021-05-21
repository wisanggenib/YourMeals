import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Meals, Category, MealDetails} from '../container';

const Stack = createStackNavigator();

const MealStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Meals" component={Meals} />
      <Stack.Screen name="MealDetails" component={MealDetails} />
    </Stack.Navigator>
  );
};

export default MealStack;
