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
  },
  img: {
    resizeMode: 'cover',
    width: 320,
    height: 420,
  },
  cardInfo: {
    height: 'auto',
    width: 330,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  cardLiked: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    width: 380,
  }
});