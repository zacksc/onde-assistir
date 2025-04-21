import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'space-between',
    maxWidth: 500,
    maxHeight: 'auto',
    gap: 10,
    paddingTop: 20,
    paddingBottom: 30,
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    width: 150,
    height: 200,
  },
  cardInfo: {
    height: 240,
    width: 200,
    paddingLeft: 10,
  }
});