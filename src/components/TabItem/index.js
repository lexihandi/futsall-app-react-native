/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../utils';
import {
  IconHomeActive,
  IconHomeInactive,
  IconScheduleActive,
  IconScheduleInactive,
  IconAccountActive,
  IconAccountInactive,
} from '../../assets';

const TabItem = ({label, onPress, onLongPress, isFocused}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeActive /> : <IconHomeInactive />;
    }
    if (label === 'Schedule') {
      return isFocused ? <IconScheduleActive /> : <IconScheduleInactive />;
    }
    if (label === 'Account') {
      return isFocused ? <IconAccountActive /> : <IconAccountInactive />;
    }
    return <IconHomeActive />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.containerFocus : styles.container}>
      <Icon />
      {isFocused && <Text style={styles.text}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignContent: 'center', padding: 5},
  containerFocus: {
    alignContent: 'center',
    padding: 5,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    flexDirection: 'row',
  },
  text: {
    color: colors.text.active,
    fontSize: 18,
    marginLeft: 8,
    fontFamily: fonts.primary[700],
  },
});
