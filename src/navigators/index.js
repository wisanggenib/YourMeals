import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MealStack from './meal.stack';
import FavoriteStack from './favorite.stack';
import {Filter} from '../container';

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();
const MealsDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MealStack} />
      <Drawer.Screen name="Filter" component={Filter} />
    </Drawer.Navigator>
  );
};

const RootStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Meals"
          component={MealsDrawer}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
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
              //prevent default action
              e.preventDefault();
              navigation.navigate('Favorites');
            },
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
