import React from 'react';
import { View } from 'react-native';
import { styles } from './Style';
import { BatLogo } from '../components/BatLogo/BatLogo';
import { StatusBar } from 'expo-status-bar';
import { BatBotao } from '../components/BatBotao/BatBotao';

export function Home() {
  return (
    <View style ={styles.AppContainer}>
      <View style = {styles.logoContainer}>
        <BatLogo/>
        </View>
        <View style={styles.inputContainer}>
          <BatBotao/>
          <StatusBar style = 'light'/>
        </View>

    </View>
  );
}