import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export const globalStyles = StyleSheet.create({
  pagina: {
    backgroundColor: "#CECECE",
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
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 5,
    borderColor: "#B2B2B2",
  },

  Hola: {
    top: 7,
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
    Nombre: {
      color: 'blue',
    },
  },
  
  titulo: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#000",
  },
  Junior: {
    fontSize: 30,
    color: "#555",
    marginBottom: 21,
    justifyContent: "center",
    textAlign: "center",
  },
  subtitulos: {
    fontSize: 20,
    color: "#555",
    marginBottom: 21,
  },
  
  sectionContent: {
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 22,
    color: "#000",
  },
  project: {
    flexDirection: "row",
    marginBottom: 20,
  },
  projectImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  projectImgcont: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  certificados:{
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },

  lenguajes: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  lenguajescisco: {
    width: 65,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  botonesgithub: {
    backgroundColor: "#375ECE",
    marginBottom: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    alignSelf: "center",
  },
  projectImgbdd: {
    width: 85,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  projectInfo: {
    flex: 1,
  },
  projectDescription: {
    fontSize: 14,
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
    top: 39, 
    right: 30,
    padding: 10,
    borderRadius: 5,
    zIndex: 10,
    width: screenWidth * 0.6, // Ajusta el ancho según sea necesario
  },
  buttonText: {
    color: "#fff", // Color del texto
    fontSize: 16, // Tamaño del texto
    fontWeight: "bold", // Negrita
  },
  menuButton: {
    width: 40, // Ajusta el tamaño según sea necesario
    height: 40,
    borderRadius: 20, // Si no quieres un círculo, ajusta esto a 0
    backgroundColor: "#ddd",
    margin: 10,
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
