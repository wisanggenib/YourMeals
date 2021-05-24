import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
  TouchableNativeFeedback,
  Image,
} from 'react-native';

import {ListData} from '../../components';

import Styles from './meals.style';
import {MEALS} from '../../datas/data';

const Meals = props => {
  const [data, setData] = useState([]);
  //get parrams
  const {idCategory} = props.route.params;

  useEffect(() => {
    setData(MEALS.filter(datas => datas.categoryIds.indexOf(idCategory) >= 0));
  }, [idCategory]);

  return (
    <View style={Styles.container}>
      <ListData data={data} navigation={props.navigation} />
    </View>
  );
};

export default Meals;
