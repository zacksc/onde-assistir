import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  poster: {
    width: 400,
    height: 500,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
    marginBottom: 20,
  },
  likeButton: {
    marginBottom: 20,
  },
});