import React, { useState, useEffect, useRef } from "react";
import {StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  Animated,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../ComponentesApp/styles";
import Aprendizaje from "../ComponentesApp/aprendizaje";
import Proyectos from "../ComponentesApp/Proyectos";
import Contacto from "../ComponentesApp/Contacto";
import Menu from "../ComponentesApp/menu";
import { Navegar } from "../ComponentesApp/Deslizar";
import Certificados from "../ComponentesApp/Certificados";
import Presentacion from "../ComponentesApp/presentacion";

type Section =
  | "Inicio"
  | "SobreMi"
  | "Aspiraciones"
  | "Proyectos"
  | "Aprendizaje"
  | "Contacto";

export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Para el efecto de desvanecimiento del contenido principal
  const menuAnim = useRef(new Animated.Value(0)).current; // Para el efecto de desvanecimiento del menú
  const scrollViewRef = useRef(null);

  // Efecto de desvanecimiento para el contenido principal
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  // Función para mostrar/ocultar el menú con efecto de desvanecimiento
  const toggleMenu = () => {
    const toValue = menuVisible ? 0 : 1;

    Animated.timing(menuAnim, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setMenuVisible(!menuVisible);
  };

  const handleNavigation = (section: Section) => {
    Navegar(scrollViewRef, section);
    setMenuVisible(false); // Oculta el menú después de la navegación
  };

  return (
    <View style={globalStyles.pagina}>
      <View style={globalStyles.menuContainer}>
        <TouchableOpacity onPress={toggleMenu}>
          <Image
            style={globalStyles.menuButton}
            source={require("../assets/images/casa.png")}
          />
        </TouchableOpacity>
        <Animated.View style={[globalStyles.menu, { opacity: menuAnim }]}>
          {menuVisible && <Menu handleNavigation={handleNavigation} />}
        </Animated.View>
      </View>

      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={globalStyles.barra}
      >
        <StatusBar style="dark" />

        <Animated.View style={{ opacity: fadeAnim }}>
          
          <Presentacion/>

          {/* Sobre mí */}
          <View style={globalStyles.section}>
            <Text style={globalStyles.titulos}>Sobre mí</Text>
            <Text style={globalStyles.sobremicontenido}>
              Tengo 21 años, sigo una carrera de Ingeniería en Tecnologías de la
              Información, actualmente me encuentro trabajando en el departamento de desarrollo,
              mi aspiracion es trabajar en el area de ciberseguridad
            </Text>
          </View>

          {/* Áreas de Aspiraciones */}
          <View style={globalStyles.section}>
            <Text style={globalStyles.titulos}>Áreas de Aspiraciones</Text>
            <View >
              <Image
                source={require("../assets/images/Progra.png")}
                style={globalStyles.projectImage}
              />
              <View>
                <Text style={globalStyles.projectDescription}>- Ciberseguridad</Text>
                <Text style={globalStyles.projectDescription}>- Backend</Text>
              </View>
            </View>
          </View>

          {/* Proyectos */}
          <Proyectos />

          {/* Componente Aprendizaje */}
          <Aprendizaje />

          {/* Certificados */}
          <Text style={globalStyles.titulos}>Certificados</Text>
          <Certificados/>

          {/* Contacto */}
          <Contacto />
        </Animated.View>
      </ScrollView>
    </View>
  );
}
