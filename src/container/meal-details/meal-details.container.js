import React, {useEffect, useState} from 'react';
import {View, Text, useWindowDimensions, Image, FlatList} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import Styles from './meal-details.style';

import {MEALS} from '../../datas/data';

const MealDetails = props => {
  const [meal, setMeal] = useState('');

  useEffect(() => {
    setMeal(MEALS.find(val => val.id === props.route.params.idMeal));
  }, [props.route.params.idMeal]);

  const RenderItem = ({items, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 10,
        }}>
        <Text style={{marginRight: 20}}>{index + 1 + '.'}</Text>
        <Text>{items}</Text>
      </View>
    );
  };

  const DescriptionTab = () => {
    return (
      <View style={{padding: 10}}>
        <Text> Duration of Cooking : {JSON.stringify(meal.duration)}</Text>
        <Text>Complexity : {meal.complexity}</Text>
        <Text>Affordability : {meal.affordability}</Text>
        <Text>{meal.isGlutenFree ? 'Glutten Free' : 'Not Glutten Freen'}</Text>
        <Text>{meal.isVegan ? 'Vegan Food' : 'Not Vegan Food'}</Text>
        <Text>{meal.isVegetarian ? 'Vegetarion Food' : 'Vegetarian Food'}</Text>
        <Text>{meal.isLactoseFree ? 'Lactose Free' : 'Not Lactoses Free'}</Text>
      </View>
    );
  };

  const IngredientsTab = () => {
    return (
      <FlatList
        data={meal.ingredients}
        renderItem={({item, index}) => (
          <RenderItem items={item} index={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  const stepsTab = () => {
    return (
      <FlatList
        data={meal.steps}
        renderItem={({item, index}) => (
          <RenderItem items={item} index={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  const _renderScene = SceneMap({
    about: DescriptionTab,
    ingredients: IngredientsTab,
    steps: stepsTab,
  });

  const [index, setIndex] = React.useState(0);

  const [routes] = useState([
    {key: 'about', title: 'about'},
    {key: 'ingredients', title: 'ingredients'},
    {key: 'steps', title: 'steps'},
  ]);

  const layout = useWindowDimensions();

  return (
    <View style={{flex: 1}}>
      <Image
        source={{uri: meal.imageUrl}}
        style={{width: '100%', height: '30%'}}
      />
      <TabView
        navigationState={{index, routes}}
        renderScene={_renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};

export default MealDetails;
