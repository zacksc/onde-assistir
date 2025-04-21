import React from 'react';
import { View, Text, ViewProps, StyleProp, TextProps } from 'react-native';

import { styles } from './CardInfoStyle';

interface styleCardInfo {
  style?: StyleProp<ViewProps>;
}

export function CardInfo({style}: styleCardInfo) {
  return (
    <View style={style}>
      <Text style={styles.title}>Chungking Express</Text>
      <Text style={styles.details}>
      Um policial perde sua namorada e tenta se apaixonar pela primeira mulher que ele encontra. Depois, um policial é dispensado por uma aeromoça e a balconista da lanchonete que ele frequenta faz de tudo para chamar sua atenção.kasjdklasjdaslkdjaskldjasldaskldjaskldjaslksajdkalsdjadjkçlasjdsakldjçasdklasjaskldjasdlkçasjdlkasdjaskldsjakl
      </Text>
    </View>
  );
}