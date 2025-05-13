import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  logoName: {
    fontSize: 12,
    textAlign: 'center',
  },
  logoFallback: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
});