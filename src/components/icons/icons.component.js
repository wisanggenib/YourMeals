import React from 'react';
import {Text} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';

const Icons = props => {
  //setup for icon

  switch (props.icon) {
    case 'meals':
      return <FontAwesomeIcon icon={icon.faDrumstickBite} />;
    case 'favorite':
      return <FontAwesomeIcon icon={icon.faStar} />;

    default:
      return <Text>Not Found or please Register it</Text>;
  }
};

export default Icons;
