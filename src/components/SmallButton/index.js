/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../utils';

const SmallButton = ({text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SmallButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding:3,
    height: 20,
  },
  text: {
    fontFamily: fonts.primary.bold,
    fontSize:9,
    textAlign:'center',
    color: colors.text.white,
  },
});
