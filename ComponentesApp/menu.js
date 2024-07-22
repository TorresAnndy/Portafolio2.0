// ComponentesApp/menu.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './styles';

const Menu = ({ handleNavigation }) => {
  return (
    <View>
      <TouchableOpacity style={globalStyles.button} onPress={() => handleNavigation('Inicio')}>
        <Text style={globalStyles.buttonText}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={() => handleNavigation('SobreMi')}>
        <Text style={globalStyles.buttonText}>Sobre mí</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={() => handleNavigation('Aspiraciones')}>
        <Text style={globalStyles.buttonText}>Áreas de Aspiraciones</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={() => handleNavigation('Proyectos')}>
        <Text style={globalStyles.buttonText}>Proyectos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={() => handleNavigation('Aprendizaje')}>
        <Text style={globalStyles.buttonText}>Aprendizaje</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={() => handleNavigation('Certificado')}>
        <Text style={globalStyles.buttonText}>Certificado</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={() => handleNavigation('Contacto')}>
        <Text style={globalStyles.buttonText}>Contacto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
