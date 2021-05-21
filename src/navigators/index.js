import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MealStack from './meal.stack';
import FavoriteStack from './favorite.stack';
import {event} from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Meals"
          component={MealStack}
          listeners={({navigation}) => ({
            tabPress: event => {
              event.preventDefault();
              navigation.navigate('Category');
            },
          })}
        />
        {/* add listener to make sure the screen back to parent stack */}
        <Tab.Screen
          name="Favorites"
          component={FavoriteStack}
          listeners={({navigation}) => ({
            tabPress: e => {
              navigation.navigate('Favorites');
            },
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
