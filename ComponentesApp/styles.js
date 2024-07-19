// styles.js
import { StyleSheet, Platform, Dimensions } from "react-native";

const { height: screenHeight } = Dimensions.get("window");
const sectionPadding = 20;
const sectionMarginBottom = 30;

export const globalStyles = StyleSheet.create({
  pagina: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  barra: {
    flexGrow: 1,
    padding: 20,
  },
  imagencircular: {
    width: 300,
    height: 300,
    borderRadius: 150, // Ajusta el radio para que sea la mitad del ancho/alto
    position: "absolute", // Para posicionamiento absoluto dentro del contenedor
    top: "50%", // Centra verticalmente
    left: "50%", // Centra horizontalmente
    transform: [
      { translateX: -700 }, // Mueve la imagen a la izquierda para centrarla
      { translateY: -300 }, // Mueve la imagen arriba para centrarla
    ],
  },
  Hola: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
  },

  titulo: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
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

  section: {
    height:
      screenHeight -
      sectionPadding -
      sectionMarginBottom -
      (Platform.OS === "android" ? 30 : 0),
    marginBottom: sectionMarginBottom,
    padding: sectionPadding,
    borderWidth: 2,
    borderColor: "#007bff",
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
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
    top: 0,
    right: 20,
    zIndex: 10,
  },
  menu: {
    position: "absolute",
    top: 55, // Ajusta la posición según sea necesario
    right: 30,
    padding: 10,
    borderRadius: 5,
    borderColor: "", // Solo el borde que quieres
    zIndex: 10,
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
    shadowOffset: { width: 9, height: 10 }, // Desplazamiento de la sombra
    shadowOpacity: 8, // Opacidad de la sombra
    shadowRadius: 6, // Difuminado de la sombra
    elevation: 5, // Elevación para Android
  },
});
