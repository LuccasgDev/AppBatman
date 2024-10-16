import React from 'react';
import { View, Text, Image } from 'react-native';
import batON from '../../../assets/logo/batON.png'
import { styles } from './batLogoStyles';

export function BatLogo() {
  return (
    <View >
      <Text style={styles.titulo}>
        BAT PASS GENERATOR
      </Text>
      <Image source={batON}
      style = {{
        resizeMode:'contain',
        height:180
      }} />
    </View>
  );
}
