import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './SearchButtonStyle';

interface SearchButtonProps {
  onPress: () => void;
}

export function SearchButton({onPress}: SearchButtonProps) {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
    <TouchableOpacity
    style={styles.button}
    onPress={onPress}
    >
       <Text style={styles.buttonText}>Pesquisar</Text>
    </TouchableOpacity>
    </View>
  );
}