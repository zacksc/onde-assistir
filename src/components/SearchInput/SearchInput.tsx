import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleProp, ViewStyle, TextInputProps } from 'react-native';

import { styles } from './SearchInputStyle';

interface StyleSearch extends TextInputProps {
  value: string;
  style?: StyleProp<ViewStyle>;
  onChangeText: (text: string) => void;
}
export function SearchInput({ value, onChangeText, style }: StyleSearch) {



  return (
    <>
      <View style={style}>
        <TextInput
          style={styles.searchSection}
          placeholder='Digite aqui'
          placeholderTextColor="#c9c9c9"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </>
  );
}