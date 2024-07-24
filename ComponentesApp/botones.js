import { StyleSheet } from 'react-native';

export const botonstyle = StyleSheet.create({
  contactLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContent: {
    marginHorizontal: 10,
    position: 'relative',
  },
  tooltip: {
    position: 'absolute',
    top: -30,
    left: '50%',
    marginLeft: -30, // 50% translated to pixels
    color: '#fff',
    padding: 6,
    borderRadius: 5,
    opacity: 0,
    fontSize: 14,
    zIndex: 1,
  },
  iconLink: {
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25, // for a circular shape
    backgroundColor: '#fff',
  },
  filled: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 0,
    backgroundColor: '#000',
  },
  linkedin: {
    backgroundColor: '#0274b3',
  },
  github: {
    backgroundColor: '#24262a',
  },
  instagram: {
    backgroundColor: 'transparent',
  },
  youtube: {
    backgroundColor: '#ff0000',
  },
});
