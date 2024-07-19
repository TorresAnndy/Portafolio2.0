// Deslizar.js
export const Navegar = (scrollViewRef, section) => {
  // Lógica para desplazar a la sección correspondiente
  switch (section) {
    case 'Inicio':
      scrollViewRef.current.scrollTo({y: 0, animated: true});
      break;
    case 'SobreMi':
      scrollViewRef.current.scrollTo({ y: 640, animated: true });
      break;
    case 'Aspiraciones':
      scrollViewRef.current.scrollTo({ y: 1275, animated: true });
      break;
    case 'Proyectos':
      scrollViewRef.current.scrollTo({ y: 1900, animated: true });
      break;
    case 'Aprendizaje':
      scrollViewRef.current.scrollTo({ y: 3260, animated: true });
      break;
    case 'Contacto':
      scrollViewRef.current.scrollTo({ y: 4150, animated: true });
      break;
    default:
      break;
  }
};
