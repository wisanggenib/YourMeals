import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';

import Styles from './category.style';

import {CATEGORIES} from '../../datas/data';

const renderItem = ({id, color, title}, val) => {
  return (
    <View style={Styles.itemsContainer(color)}>
      <TouchableNativeFeedback
        onPress={() => {
          val.navigate('Meals', {idCategory: id, name: title + ' Category'});
        }}>
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
        renderItem={({item}) => renderItem(item, props.navigation)}
      />
    </View>
  );
};

export default Category;
