import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Image } from 'react-native';
import { botonstyle } from './botones';
import * as link from './link'; // Asegúrate de que este módulo exista y tenga las funciones correctas

const Contacto = () => {
  const [hovered, setHovered] = useState('');
  const [filledHeight, setFilledHeight] = useState({
    linkedin: new Animated.Value(0),
    github: new Animated.Value(0),
    instagram: new Animated.Value(0),
  });
  const [tooltipOpacity, setTooltipOpacity] = useState({
    linkedin: new Animated.Value(0),
    github: new Animated.Value(0),
    instagram: new Animated.Value(0),
  });

  const handleMouseEnter = (social) => {
    setHovered(social);
    Animated.timing(filledHeight[social], {
      toValue: 50,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(tooltipOpacity[social], {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleMouseLeave = (social) => {
    setHovered('');
    Animated.timing(filledHeight[social], {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(tooltipOpacity[social], {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={botonstyle.contactLinks}>
      <View style={botonstyle.iconContent}>
        <TouchableOpacity
          onPress={link.handleLinkedInPress}
          onPressIn={() => handleMouseEnter('linkedin')}
          onPressOut={() => handleMouseLeave('linkedin')}
          style={[botonstyle.iconLink, hovered === 'linkedin' && { backgroundColor: '#0274b3' }]}
        >
          <Image source={require('../assets/images/Linked.png')} style={styles.iconImage} />
          <Animated.View style={[botonstyle.filled, { height: filledHeight.linkedin }]} />
          <Text style={[botonstyle.tooltip, { opacity: tooltipOpacity.linkedin }]}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
      <View style={botonstyle.iconContent}>
        <TouchableOpacity
          onPress={link.handleGitHubPress}
          onPressIn={() => handleMouseEnter('github')}
          onPressOut={() => handleMouseLeave('github')}
          style={[botonstyle.iconLink, hovered === 'github' && { backgroundColor: '#24262a' }]}
        >
          <Image source={require('../assets/images/Github.png')} style={styles.iconImage} />
          <Animated.View style={[botonstyle.filled, { height: filledHeight.github }]} />
          <Text style={[botonstyle.tooltip, { opacity: tooltipOpacity.github }]}>GitHub</Text>
        </TouchableOpacity>
      </View>
      <View style={botonstyle.iconContent}>
        <TouchableOpacity
          onPress={link.handleInstagramPress}
          onPressIn={() => handleMouseEnter('instagram')}
          onPressOut={() => handleMouseLeave('instagram')}
          style={[botonstyle.iconLink, hovered === 'instagram' && { backgroundColor: '#e1306c' }]}
        >
          <Image source={require('../assets/images/Instagram.png')} style={styles.iconImage} />
          <Animated.View style={[botonstyle.filled, { height: filledHeight.instagram }]} />
          <Text style={[botonstyle.tooltip, { opacity: tooltipOpacity.instagram }]}>Instagram</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconImage: {
    width: 50,
    height: 50,
  },
});

export default Contacto;
