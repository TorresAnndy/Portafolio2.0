// Deslizar.js
export const Navegar = (scrollViewRef, section) => {
  // Lógica para desplazar a la sección correspondiente
  switch (section) {
    case 'Inicio':
      scrollViewRef.current.scrollTo({y: 0, animated: true});
      break;
    case 'SobreMi':
      scrollViewRef.current.scrollTo({ y: 740, animated: true });
      break;
    case 'Aspiraciones':
      scrollViewRef.current.scrollTo({ y: 1475, animated: true });
      break;
    case 'Proyectos':
      scrollViewRef.current.scrollTo({ y: 2220, animated: true });
      break;
    case 'Aprendizaje':
      scrollViewRef.current.scrollTo({ y: 3745, animated: true });
      break;
    case 'Certificado':
      scrollViewRef.current.scrollTo({ y: 4490, animated: true });
      break;
    case 'Contacto':
      scrollViewRef.current.scrollTo({ y: 5290, animated: true });
      break;
    default:
      break;
  }
};