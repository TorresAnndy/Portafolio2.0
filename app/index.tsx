// App.js
import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Animated, ScrollView, TouchableOpacity } from 'react-native';
import { globalStyles } from '../ComponentesApp/styles';
import Aprendizaje from '../ComponentesApp/aprendizaje';
import Proyectos from '../ComponentesApp/Proyectos';
import Contacto from '../ComponentesApp/Contacto';
import Menu from '../ComponentesApp/menu';
import { Navegar } from '../ComponentesApp/Deslizar';

type Section = 'Inicio' | 'SobreMi' | 'Aspiraciones' | 'Proyectos' | 'Aprendizaje' | 'Contacto';

export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

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

  const handleNavigation = (section: Section) => {
    Navegar(scrollViewRef, section);
    setMenuVisible(false); // Oculta el menú después de la navegación
  };

  return (
    <View style={globalStyles.pagina}>
      <View style={globalStyles.menuContainer}>
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
          <Image
            style={globalStyles.menuButton}
            source={require('../assets/images/casa.png')} // Botón de menú
          />
        </TouchableOpacity>
        {menuVisible && (
          <View style={globalStyles.menu}>
            <Menu handleNavigation={handleNavigation} />
          </View>
        )}
      </View>

      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={globalStyles.barra}
      >
        <StatusBar style="dark" />
        
        <Animated.View style={{ opacity: fadeAnim }}>
          {/* Header */}
          <View style={globalStyles.header}>
            <Image
              source={require('../assets/images/perfil.png')}
              style={globalStyles.imagencircular}
            />
            <Text style={globalStyles.titulo}>Hola, mi nombre es Andy</Text>
            <Text style={globalStyles.subtitulos}>Junior Developer</Text>
          </View>
          
          {/* Sobre mí */}
          <View style={globalStyles.section}>
            <Text style={globalStyles.titulo}>Sobre mí</Text>
            <Text style={globalStyles.sectionContent}>
              Tengo 21 años, sigo una carrera de Ingeniería en Tecnologías de la Información
            </Text>
          </View>
          
          {/* Áreas de Aspiraciones */}
          <View style={globalStyles.section}>
            <Text style={globalStyles.titulo}>Áreas de Aspiraciones</Text>
            <View style={globalStyles.project}>
              <Image
                source={require('../assets/images/Progra.png')}
                style={globalStyles.projectImage}
              />
              <View style={globalStyles.projectInfo}>
                <Text style={globalStyles.projectDescription}>- Backend</Text>
                <Text style={globalStyles.projectDescription}>- Ciberseguridad</Text>
              </View>
            </View>
          </View>
          
          {/* Proyectos */}
          <Proyectos />
          
          {/* Componente Aprendizaje */}
          <Aprendizaje />
          
          {/* Contacto */}
          <Contacto />
        </Animated.View>
        
      </ScrollView>
    </View>
  );
}
