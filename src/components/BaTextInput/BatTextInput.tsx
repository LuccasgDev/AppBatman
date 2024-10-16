import React from 'react';
import {TextInput, View } from 'react-native';
import { styles } from './BatTextInputStyles';

interface BatTextInputProps {
  pass: string;
}

export function BaTextInput(props: BatTextInputProps) {
  return (
    <TextInput
      style={styles.inputContainer}
      placeholder='pass'
      value={props.pass}
    />
  );
}
