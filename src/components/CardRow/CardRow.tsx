import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { styles } from './CardRowStyle';
import { LikedButton } from '../LikedButton/LikedButton';

interface CardRowProps {
  title: string;
  overview: string;
  posterPath: string;
  onPress: () => void;
}

export function CardRow({ title, overview, posterPath, onPress }: CardRowProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${posterPath}` }}
        style={styles.img}
      />
      <View style={styles.cardInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.overview}>{overview}</Text>
      </View>
      <LikedButton style={styles.likeButton} />
    </TouchableOpacity>
  );
}