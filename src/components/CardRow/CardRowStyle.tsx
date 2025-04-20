import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'space-between',
    maxWidth: 320,
    maxHeight: 'auto',
    paddingLeft: 30,
    paddingRight: 90,
    gap: 10,
    paddingBottom: 30,
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    width: 150,
    height: 200,
  }
});