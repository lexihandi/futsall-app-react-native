/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconAccount, IconField} from '../../assets';
import {fonts} from '../../utils';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userInfo}>
        <IconAccount/>
        <View style={styles.title}>
          <Text style={styles.greet}>Hello Bro,</Text>
          <Text style={styles.name}>Lexi Handi Nayana</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.schedule}>
        <View>
          <Text style={styles.time}>19.00 WIB</Text>
          <Text style={styles.date}>Sabtu, 01-12-2020</Text>
        </View>
        <View style={styles.iconSchedule}>
          <IconField />
          <Text style={styles.label}>Next Jadwal</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfo: {flexDirection: 'row'},
  title: {marginLeft: 6},
  greet: {fontFamily: fonts.primary[400], fontSize: 12},
  name: {fontFamily: fonts.primary.bold, fontSize: 12},
  time: {fontFamily: fonts.primary.bold, fontSize: 12, textAlign: 'right'},
  date: {fontFamily: fonts.primary[300], fontSize: 12},
  label: {fontFamily: fonts.primary[300], fontSize: 12, marginTop: 4},
  iconSchedule: {alignItems: 'center'},
  schedule: {flexDirection: 'row'},
});
