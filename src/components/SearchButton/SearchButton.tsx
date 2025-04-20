import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './SearchButtonStyle';


export function SearchButton() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 480}}>
    <TouchableOpacity style={styles.button}>
       <Text style={styles.buttonText}>Pesquisar</Text>
    </TouchableOpacity>
    </View>
  );
}