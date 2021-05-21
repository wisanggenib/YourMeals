import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';

import {CATEGORIES} from '../../datas/data';

import {Icons} from '../../components';

import Styles from './category.style';

const renderItem = ({id, color, title}) => {
  return (
    <View style={Styles.itemsContainer(color)}>
      <TouchableNativeFeedback>
        <View style={Styles.items}>
          <Text style={Styles.itemsTitle}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const Category = props => {
  return (
    <View style={Styles.container}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        contentContainerStyle={Styles.listContainer}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
};

export default Category;
