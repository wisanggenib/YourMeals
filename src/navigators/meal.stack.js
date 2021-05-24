import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Meals, Category, MealDetails} from '../container';

const Stack = createStackNavigator();

const MealStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen
        name="Meals"
        component={Meals}
        options={({route}) => ({title: route.params.name})}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetails}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};

export default MealStack;
