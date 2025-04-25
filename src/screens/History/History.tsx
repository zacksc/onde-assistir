import React from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './HistoryStyle';
import { Details } from '../Details/Details';
import { TrashButton } from '../../components/TrashButton/TrashButton';
import { CardRow } from '../../components/CardRow/CardRow';

const historyGroup = () => {
  return(
      <View style={styles.historyCard}>
            <CardRow />
            <TrashButton style={styles.trashBttn}/>
         </View>
  )
}

export function History() {
  return (
  <ScrollView style={styles.container} >
     {historyGroup()}
  </ ScrollView>
  );
}