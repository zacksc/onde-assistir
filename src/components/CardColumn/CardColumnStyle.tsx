import { StyleSheet } from 'react-native';
import { LikedButton } from '../LikedButton/LikedButton';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    maxWidth: 800,
    maxHeight: 'auto',
    gap: 10,
    paddingTop: 20,
    paddingBottom: 30,
  },
  img: {
    resizeMode: 'cover',
    width: 320,
    height: 420,
  },
  cardInfo: {
    height: 240,
    width: 350,
    paddingLeft: 10,
  },
  cardLiked: {
    flex: 1,
    flexDirection: 'row',
  }
});