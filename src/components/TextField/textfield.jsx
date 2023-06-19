import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextField = ({ value, placeholder, onChangeText }) => {
  return (
    <View>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};