import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: '0',
    bottom: 200,
    paddingBottom: 50,
  },
  logo: {
    width: 100
  },
  titleLogo:{
    width: 200,
    paddingLeft: 20,
    paddingRight: 0,
  },
  titleTop:{
    fontWeight: '900',
    fontSize: 60,
    paddingBottom: 0,
  },
  titleBottom:{
    fontWeight: '200',
    fontSize: 50
  }
});