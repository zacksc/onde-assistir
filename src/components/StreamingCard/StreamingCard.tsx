import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { styles } from './StreamingCardStyle';

interface StreamingCardProps {
  providers: { name: string; logo: string | null }[];
}

export function StreamingCard({ providers }: StreamingCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Disponível em:</Text>
      {providers.length > 0 ? (
        <FlatList
          data={providers}
          keyExtractor={(item) => item.name}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.logoContainer}>
              {item.logo ? (
                <Image source={{ uri: item.logo }} style={styles.logo} />
              ) : (
                <Text style={styles.logoFallback}>Sem logo</Text>
              )}
              <Text style={styles.logoName}>{item.name}</Text>
            </View>
          )}
        />
      ) : (
        <Text>Nenhum provedor disponível</Text>
      )}
    </View>
  );
}