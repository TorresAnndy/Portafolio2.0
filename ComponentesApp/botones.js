import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
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
    transform: [{ translateX: -50 }],
    color: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    opacity: 0,
    visibility: 'hidden',
    fontSize: 14,
    transition: 'all 0.3s ease',
  },
  iconContentHover: {
    opacity: 1,
    visibility: 'visible',
    top: -50,
  },
  linkButton: {
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#fff',
    transition: 'all 0.3s ease-in-out',
  },
  linkButtonHover: {
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 0.45,
    shadowRadius: 45,
  },
  linkButtonFilled: {
    position: 'absolute',
    top: 'auto',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 0,
    backgroundColor: '#000',
    transition: 'all 0.3s ease-in-out',
  },
  linkButtonFilledHover: {
    height: '100%',
  },
  linkButtonText: {
    position: 'relative',
    zIndex: 1,
    width: 30,
    height: 30,
  },
  linkedinFilled: {
    backgroundColor: '#0274b3',
  },
  githubFilled: {
    backgroundColor: '#24262a',
  },
  instagramFilled: {
    backgroundColor: 'linear-gradient(45deg, #405de6, #5b51db, #b33ab4, #c135b4, #e1306c, #fd1f1f)',
  },
  youtubeFilled: {
    backgroundColor: '#ff0000',
  },
});
