// Deslizar.js
export const Navegar = (scrollViewRef, section) => {
  // Lógica para desplazar a la sección correspondiente
  switch (section) {
    case 'Inicio':
      scrollViewRef.current.scrollTo({y: 0, animated: true});
      break;
    case 'SobreMi':
      scrollViewRef.current.scrollTo({ y: 1448, animated: true });
      break;
    case 'Aspiraciones':
      scrollViewRef.current.scrollTo({ y: 2885, animated: true });
      break;
    case 'Proyectos':
      scrollViewRef.current.scrollTo({ y: 4320, animated: true });
      break;
    case 'Aprendizaje':
      scrollViewRef.current.scrollTo({ y: 7300, animated: true });
      break;
    case 'Certificado':
      scrollViewRef.current.scrollTo({ y: 8750, animated: true });
      break;
    case 'Contacto':
      scrollViewRef.current.scrollTo({ y: 10290, animated: true });
      break;
    default:
      break;
  }
};
