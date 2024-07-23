import React from 'react';
import { View, Text, Image} from 'react-native';
import { globalStyles } from './styles';

export const Presentacion = () => {
  return (
    <View style={globalStyles.section}>
            <Image
              source={require("../assets/images/perfil.png")}
              style={globalStyles.imagencircular}
            />
            <Text style={globalStyles.Hola}>¡Hola!,</Text>
            <Text style={globalStyles.Hola}>
              Me Llamo,{" "}
              <Text style={globalStyles.Hola.Nombre}>Andy Gonzales</Text>
            </Text>
            <Text style={globalStyles.Hola.Junior}>---Junior Developer---</Text>
          </View>
    
  );
};

export default Presentacion;
