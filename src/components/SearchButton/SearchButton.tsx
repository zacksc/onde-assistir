import React from 'react';
import { Text, TouchableOpacity, View, TouchableOpacityProps } from 'react-native';

import { styles } from './SearchButtonStyle';

interface searchFunction {
  onPress?: TouchableOpacityProps;
}

export function SearchButton({  onPress } : searchFunction) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 480}}>
    <TouchableOpacity
    style={styles.button}
    onPress={onPress}
    >
       <Text style={styles.buttonText}>Pesquisar</Text>
    </TouchableOpacity>
    </View>
  );
}