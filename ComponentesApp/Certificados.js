import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from './styles';
import * as link from './link'; 

export const certificados = () => {
  return (
    <View style={globalStyles.section}>
      <Text style={globalStyles.titulo}>Git y GitHub</Text>
      <TouchableOpacity onPress={link.CertificadoGityGitHub}>
        <Image
          source={require('../assets/images/certificado.png')}
          style={globalStyles.certificados}
        />
      </TouchableOpacity>
    </View>
    
  );
};

export default certificados;