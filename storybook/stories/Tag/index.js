import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

export default function Tag(props) {
  return (
    <View style={style.main}>
      <Text style={style.title}>{props.children}</Text>
    </View>
  );
}
