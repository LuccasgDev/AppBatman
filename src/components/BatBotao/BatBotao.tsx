import React, { useState } from 'react';
import { Button, Pressable, View,Text } from 'react-native';
import { styles } from './BatBotaoStyles';
import { BaTextInput } from '../BaTextInput/BatTextInput';
import generatePass from '../../services/BatPass';
import * as Clipboard from 'expo-clipboard';

export function BatBotao() {
    const [pass, setPass] = useState('')

    function GenerateBatButao(){
     setPass(generatePass)
    }

    function CoyButton(){
        Clipboard.setStringAsync(pass)
    }

  return (
    <>

        <BaTextInput pass={pass}/>
        
        <Pressable 
        onPress={CoyButton}
        style = {styles.butao}>
            <Text style = {{color:"gold", fontSize: 20}}>
                🦇Copy🦇
            </Text>

        </Pressable>
        <Pressable onPress={GenerateBatButao}
        style = {styles.butao}>
            <Text style = {{color:"gold",fontSize: 20}} >
                🦇Generate🦇
            </Text>

        </Pressable>
    </>
  );
}