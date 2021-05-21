import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Icons} from '../components';

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
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            paddingBottom: 5,
            fontSize: 12,
          },
        }}>
        <Tab.Screen
          name="Meals"
          component={MealsDrawer}
          options={{
            tabBarLabel: 'Meals',
            tabBarIcon: ({color, size}) => (
              <Icons icon="meals" color={'black'} size={20} />
            ),
          }}
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
          options={{
            tabBarLabel: 'Favorite Meals',
            tabBarIcon: ({color, size}) => (
              <Icons icon="favorite" color={'black'} size={20} />
            ),
          }}
          listeners={({navigation}) => ({
            tabPress: () => {
              navigation.navigate('Favorites');
            },
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
