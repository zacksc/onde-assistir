import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './SearchButtonStyle';


export function SearchButton() {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
    <TouchableOpacity
    style={styles.button}
    onPress={() => {navigation.navigate('Busca')}}
    >
       <Text style={styles.buttonText}>Pesquisar</Text>
    </TouchableOpacity>
    </View>
  );
}