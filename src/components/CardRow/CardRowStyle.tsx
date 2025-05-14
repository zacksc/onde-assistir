import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  img: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  overview: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  likeButton: {
    marginLeft: 10,
  },
  rightButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});