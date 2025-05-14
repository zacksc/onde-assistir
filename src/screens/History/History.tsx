import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './HistoryStyle';
import { CardRow } from '../../components/CardRow/CardRow';
import { TrashButton } from '../../components/TrashButton/TrashButton';

export function History() {
  const [history, setHistory] = useState<any[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const loadHistory = async () => {
        try {
          const storedHistory = await AsyncStorage.getItem('movieHistory');
          setHistory(storedHistory ? JSON.parse(storedHistory) : []);
        } catch (error) {
        }
      };
      loadHistory();
    }, [])
  );

  const handleRemoveFromHistory = async (movieId: number) => {
    try {
      const updatedHistory = history.filter((movie) => movie.id !== movieId);
      setHistory(updatedHistory);
      await AsyncStorage.setItem('movieHistory', JSON.stringify(updatedHistory));
    } catch (error) {
    }
  };

  return (
    <ScrollView style={styles.container}>
      {history.length > 0 ? (
        history
          .filter(movie => movie && movie.id && movie.title && movie.poster_path)
          .map((movie) => (
            <CardRow
              key={movie.id}
              title={movie.title ? String(movie.title) : ''}
              overview={movie.overview ? String(movie.overview) : ''}
              posterPath={movie.poster_path ? String(movie.poster_path) : ''}
              onPress={() => {}}
              rightButton={
                <TrashButton onPress={() => handleRemoveFromHistory(movie.id)} />
              }
            />
          ))
      ) : (
        <Text>Nenhum histórico disponível</Text>
      )}
    </ScrollView>
  );
}