import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { styles } from './CardRowStyle';

interface CardRowProps {
  title: string;
  overview: string;
  posterPath: string;
  onPress: () => void;
  rightButton?: React.ReactNode; // Botão adicional no lado direito
}

function truncate(text: string, maxLength: number) {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength - 3) + '...' : text;
}

export function CardRow({ title, overview, posterPath, onPress, rightButton }: CardRowProps) {
  if (!title || !posterPath) {
    return null; // Não renderiza o componente se os dados estiverem ausentes
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${posterPath}` }}
        style={styles.img}
      />
      <View style={styles.cardInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.overview}>
          {truncate(overview, 210)} {/* Altere 100 para o limite desejado */}
        </Text>
      </View>
      {rightButton && <View style={styles.rightButton}>{rightButton}</View>}
    </TouchableOpacity>
  );
}