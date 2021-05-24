import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableNativeFeedback,
} from 'react-native';

import Styles from './list-data.style';

const ListData = props => {
  const RenderItem = ({item}) => {
    return (
      <View style={Styles.listItemContainer}>
        <TouchableNativeFeedback
          useForeground={true}
          onPress={() =>
            props.navigation.navigate('MealDetails', {
              idMeal: item.id,
              name: item.title,
            })
          }>
          <View>
            <Image
              source={{uri: item.imageUrl}}
              style={Styles.imageContainer}
              defaultSource={require('../../assets/images/default-image.png')}
            />
            <View style={{padding: 10}}>
              <Text style={Styles.title}>{item.title}</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={props.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <RenderItem item={item} />}
    />
  );
};

export default ListData;
