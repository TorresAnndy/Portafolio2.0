import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export const globalStyles = StyleSheet.create({
  pagina: {
    backgroundColor: "#CBD7F8",
    flex: 1,
  },

  section: {
    top: -15,
    marginBottom: 30,
    paddingHorizontal: 45, // Ajustado para padding horizontal
    paddingVertical: 20, // Ajusta padding vertical si es necesario
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#B2B2B2",
    backgroundColor: "#E5E5E5",
    height: screenHeight, // Para que la sección ocupe toda la altura de la pantalla
  },

  sectioncontacto: {
    marginBottom: -20,
    paddingHorizontal: 45, // Ajustado para padding horizontal
    paddingVertical: 50, // Ajusta padding vertical si es necesario
    alignItems: "center",
    justifyContent: "center",
    height: screenHeight, // Para que la sección ocupe toda la altura de la pantalla
  },

  barra: {
    flexGrow: 1,
    padding: 20,
  },

  imagencircular: {
    top: -100,
    height: 800,
    width: 800,
    borderRadius: 400,
    borderWidth: 5,
    borderColor: "#A0B9FB",
  },

  Hola: {
    top: -100,
    fontSize: 100,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
    Nombre: {
      color: 'blue',
    },
    Junior: {
      top: -100,
      fontSize: 50,
      color: "#555",
      marginBottom: 21,
      justifyContent: "center",
      textAlign: "center",
    },
  },

  
  
  titulos: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#000",
    
  },

  sobremicontenido: {
    alignItems: "center",
    textAlign: "center",
    fontSize: 30,
    color: "#000",
  },
  
  subtitulos: {
    fontSize: 20,
    color: "#555",
    marginBottom: 21,
  },
  
  

  project: {
    flexDirection: "row",
    marginBottom: 20,
  },
  projectImage: {
    width: 300,
    height: 300,
  },

  projectImgcont: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },

  imagencontacto: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },

  certificados:{
    width: 200,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },

  lenguajes: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  lenguajescisco: {
    width: 198,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },

  botonesgithub: {
    fontSize: 30,
    backgroundColor: "#D5D5D5",
    marginBottom: 20, // Margen inferior ajustado
    paddingVertical: 30, // Ajuste vertical
    paddingHorizontal: 50, // Ajuste horizontal
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10, // Ajuste de borde
    alignSelf: "center",
  },

  projectImgbdd: {
    top: -100,
    width: 300,
    height: 340,
    borderRadius: 10,
    marginRight: 10,
  },

  projectInfo: {
    flex: 1,
  },

  projectDescription: {
    fontSize: 35,
    marginBottom: 5,
    color: "#000",
  },

  contactLinks: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  contactLink: {
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 5,
  },
  contactLinkText: {
    color: "#007bff",
    fontWeight: "bold",
    textAlign: "center",
  },

  menuContainer: {
    position: "absolute",
    top: 5,
    right: 20,
    zIndex: 10,
  },
  menu: {
    position: "absolute",
    top: 100, 
    right: 100,
    padding: 10,
    borderRadius: 5,
    zIndex: 10,
    width: screenWidth * 0.6, // Ajusta el ancho según sea necesario
  },
  buttonText: {
    color: "#fff", // Color del texto
    fontSize: 40, // Tamaño del texto
    fontWeight: "bold", // Negrita
  },
  menuButton: {
    width: 100, // Ajusta el tamaño según sea necesario
    height: 100,    
    margin: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 10,
    backgroundColor: "#007bff", // Color de fondo del botón
    paddingVertical: 15, // Espaciado vertical
    paddingHorizontal: 20, // Espaciado horizontal
    borderRadius: 10, // Bordes redondeados
    borderWidth: 1, // Ancho del borde
    borderColor: "#0056b3", // Color del borde
    alignItems: "center", // Centra el texto horizontalmente
    justifyContent: "center", // Centra el texto verticalmente
    shadowColor: "#000", // Color de la sombra
    shadowOffset: { width: 15, height: 15 }, // Desplazamiento de la sombra
    shadowOpacity: 8, // Opacidad de la sombra
    shadowRadius: 6, // Difuminado de la sombra
    elevation: 55, // Elevación para Android
  },
});
