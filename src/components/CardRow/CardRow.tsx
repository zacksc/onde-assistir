import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import { styles } from './CardRowStyle'
import { truncate } from '../../utils/truncate'

interface CardRowProps {
  title: string
  overview: string
  posterPath: string
  onPress: () => void
  rightButton?: React.ReactNode
}

export function CardRow({ title, overview, posterPath, onPress, rightButton }: CardRowProps) {
  if (!title || !posterPath) {
    return null
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
          {truncate(overview, 210)}
        </Text>
      </View>
      {rightButton && <View style={styles.rightButton}>{rightButton}</View>}
    </TouchableOpacity>
  )
}