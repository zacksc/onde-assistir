import React from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleProp, ViewStyle } from 'react-native';


import { styles } from './SearchInputStyle';

interface StyleSearch{
  style?: StyleProp<ViewStyle>;
}



export function SearchInput({style} : StyleSearch) {
  return (
    <>
    {/* </><View style={{ alignItems: 'center', justifyContent: 'center', bottom: 480 }}> */}
    <View style={ style }>
            <TouchableOpacity style={styles.searchSection}>  
              <TextInput
                  placeholder='Digite aqui'
                  placeholderTextColor="#c9c9c9"
                  
                />
            </TouchableOpacity>
            </View>
    </>
  );
}