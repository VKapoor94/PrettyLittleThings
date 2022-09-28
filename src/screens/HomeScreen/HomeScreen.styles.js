import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 10,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 1,
  },
  text: {
    fontSize: 18,
    fontFamily: 'arial',
    color: 'black',
    flexWrap: 'wrap',
  },
  price: {
    fontSize: 16,
    color: 'grey',
  },
});

export default styles;
