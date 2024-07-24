import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from './styles';
import * as link from './link'; 

const Contacto = () => {
  return (
    <View style={globalStyles.section}>
      <Text style={globalStyles.titulo}>Contacto</Text>
      <View style={globalStyles.contactLinks}>
        <TouchableOpacity onPress={link.handleLinkedInPress}>
          <Image
            source={require('../assets/images/Linked.png')}
            style={globalStyles.projectImgcont}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={link.handleGitHubPress}>
          <Image
            source={require('../assets/images/Github.png')}
            style={globalStyles.projectImgcont}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={link.handlefacebookPress}>
          <Image
            source={require('../assets/images/Facebook.png')}
            style={globalStyles.projectImgcont}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={link.handleinstagramPress}>
          <Image
            source={require('../assets/images/Instagram.png')}
            style={globalStyles.projectImgcont}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contacto;