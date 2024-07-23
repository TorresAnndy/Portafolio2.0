import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const isLargeScreen = screenWidth > 600; // Definir un punto de corte para pantallas grandes

export const globalStyles = StyleSheet.create({
  pagina: {
    backgroundColor: "#CBD7F8",
    flex: 1,
  },

  section: {
    top: -15,
    marginBottom: 30,
    paddingHorizontal: isLargeScreen ? 45 : 20, // Ajustado para pantallas grandes y pequeñas
    paddingVertical: isLargeScreen ? 20 : 10, // Ajustado para pantallas grandes y pequeñas
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#B2B2B2",
    backgroundColor: "#E5E5E5",
    height: screenHeight,
  },

  sectioncontacto: {
    marginBottom: -20,
    paddingHorizontal: isLargeScreen ? 45 : 20,
    paddingVertical: isLargeScreen ? 50 : 20,
    alignItems: "center",
    justifyContent: "center",
    height: screenHeight,
  },

  barra: {
    flexGrow: 1,
    padding: isLargeScreen ? 20 : 10,
  },

  imagencircular: {
    top: -100,
    height: isLargeScreen ? 800 : 200,
    width: isLargeScreen ? 800 : 200,
    borderRadius: isLargeScreen ? 400 : 100,
    borderWidth: 5,
    borderColor: "#A0B9FB",
  },

  Hola: {
    top: -100,
    fontSize: isLargeScreen ? 100 : 30,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
    Nombre: {
      color: "blue",
    },
    Junior: {
      top: -100,
      fontSize: isLargeScreen ? 50 : 20,
      color: "#555",
      marginBottom: 21,
      justifyContent: "center",
      textAlign: "center",
    },
  },




  titulos: {
    textAlign: "center",
    fontSize: isLargeScreen ? 50 : 20,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#000",
  },

  sobremicontenido: {
    alignItems: "center",
    textAlign: "center",
    fontSize: isLargeScreen ? 30 : 15,
    color: "#000",
  },

  subtitulos: {
    fontSize: isLargeScreen ? 20 : 14,
    color: "#555",
    marginBottom: 21,
  },

  project: {
    flexDirection: "row",
    marginBottom: 20,
  },

  projectImage: {
    width: isLargeScreen ? 300 : 150,
    height: isLargeScreen ? 300 : 150,
  },

  projectImgcont: {
    width: isLargeScreen ? 100 : 50,
    height: isLargeScreen ? 110 : 50,
    borderRadius: 10,
    marginRight: 10,
  },

  imagencontacto: {
    width: isLargeScreen ? 100 : 50,
    height: isLargeScreen ? 100 : 50,
    borderRadius: 10,
    marginRight: 10,
  },

  certificados: {
    width: isLargeScreen ? 200 : 100,
    height: isLargeScreen ? 200 : 100,
    borderRadius: 10,
    marginRight: 10,
  },

  lenguajes: {
    width: isLargeScreen ? 100 : 50,
    height: isLargeScreen ? 100 : 50,
    borderRadius: 10,
    marginRight: 10,
  },

  lenguajescisco: {
    width: isLargeScreen ? 120 : 65,
    height: isLargeScreen ? 100 : 50,
    borderRadius: 10,
    marginRight: 10,
  },

  botonesgithub: {
    fontSize: isLargeScreen ? 30 : 15,
    backgroundColor: "#D5D5D5",
    marginBottom: 20,
    paddingVertical: isLargeScreen ? 30 : 15,
    paddingHorizontal: isLargeScreen ? 50 : 25,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    alignSelf: "center",
  },

  projectImgbdd: {
    width: isLargeScreen ? 300 : 150,
    height: isLargeScreen ? 340 : 170,
    borderRadius: 10,
    marginRight: 10,
  },

  projectInfo: {
    flex: 1,
  },

  projectDescription: {
    fontSize: isLargeScreen ? 35 : 18,
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
    top: isLargeScreen ? 100: 60,
    right: isLargeScreen ? 100: 50,
    padding: 10,
    borderRadius: 5,
    zIndex: 10,
    width: screenWidth * 0.6,
  },

  buttonText: {
    color: "#fff",
    fontSize: isLargeScreen ? 40 : 20,
    fontWeight: "bold",
  },

  menuButton: {
    left: isLargeScreen ? 0: 25,
    width: isLargeScreen ? 100 : 50,
    height: isLargeScreen ? 100 : 50,
    margin: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    margin: 10,
    backgroundColor: "#007bff",
    paddingVertical: isLargeScreen ? 15 : 10,
    paddingHorizontal: isLargeScreen ? 20 : 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0056b3",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 15, height: 15 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
});
