/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconCustomer, IconBooking, IconJoinTeam} from '../../assets';
import {colors, fonts} from '../../utils';

const Service = ({title, active, onPress}) => {
  const Icon = () => {
    if (title === 'Paket Langganan') {
      return <IconCustomer />;
    }
    if (title === 'Booking Lapangan') {
      return <IconBooking />;
    }
    if (title === 'Join Team') {
      return <IconJoinTeam />;
    }
    return <IconCustomer />;
  };
  return (
    <TouchableOpacity style={styles.container(active)} onPress={onPress}>
      <View style={styles.icon}>
        <Icon />
        <Text style={styles.title(active)}>{title.replace(' ', '\n')}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Service;

const styles = StyleSheet.create({
  icon: {marginTop: -30},
  container: (active) => ({
    alignItems: 'center',
    backgroundColor: active ? colors.primary : colors.background,
    borderRadius: 10,
    padding: 10,
    borderColor: colors.secondary,
    borderWidth: active ? 0 : 2,
  }),
  title: (active) => ({
    textAlign: 'center',
    fontFamily: fonts.primary[700],
    fontSize: 14,
    color: active ? colors.text.white : colors.text.inactive,
    marginTop: 5,
  }),
});
