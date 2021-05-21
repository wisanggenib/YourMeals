import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsContainer: color => ({
    margin: 10,
    height: 150,
    width: '45%',
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: color,
  }),
  items: {
    width: '100%',
    height: '100%',
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  listContainer: {
    margin: 8,
    paddingBottom: 20,
  },
  itemsTitle: {
    fontSize: 24,
    textAlign: 'right',
    color: 'white',
    fontWeight: 'bold',
  },
});
