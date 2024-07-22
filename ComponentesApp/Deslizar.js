// Deslizar.js
export const Navegar = (scrollViewRef, section) => {
  // Lógica para desplazar a la sección correspondiente
  switch (section) {
    case 'Inicio':
      scrollViewRef.current.scrollTo({y: 0, animated: true});
      break;
    case 'SobreMi':
      scrollViewRef.current.scrollTo({ y: 745, animated: true });
      break;
    case 'Aspiraciones':
      scrollViewRef.current.scrollTo({ y: 1475, animated: true });
      break;
    case 'Proyectos':
      scrollViewRef.current.scrollTo({ y: 2210, animated: true });
      break;
    case 'Aprendizaje':
      scrollViewRef.current.scrollTo({ y: 3750, animated: true });
      break;
    case 'Certificado':
      scrollViewRef.current.scrollTo({ y: 4460, animated: true });
      break;
    case 'Contacto':
      scrollViewRef.current.scrollTo({ y: 5289, animated: true });
      break;
    default:
      break;
  }
};
