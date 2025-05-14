import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ou qualquer biblioteca de ícones que você esteja usando

type TrashButtonProps = {
  onPress: () => void;
  style?: object;
};

export const TrashButton: React.FC<TrashButtonProps> = ({ onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Ionicons name="trash-outline" size={24} color="red" /> {/* Ícone de lixeira corrigido */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});