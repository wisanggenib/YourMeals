import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {ListData} from '../../components';

import Styles from './meals.style';
import {MEALS} from '../../datas/data';

const Meals = props => {
  const [meals, setMeals] = useState([]);
  //get parrams
  const {idCategory} = props.route.params;

  useEffect(() => {
    setMeals(MEALS.filter(datas => datas.categoryIds.indexOf(idCategory) >= 0));
  }, [idCategory]);

  return (
    <View style={Styles.container}>
      <ListData data={meals} navigation={props.navigation} />
    </View>
  );
};

export default Meals;
