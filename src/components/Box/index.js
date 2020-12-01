/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {SmallButton} from '../../components';
import {VamosFc, AnNahl, ArsyilFc, VeFc} from '../../assets';
import {colors, fonts} from '../../utils';

const Box = ({name, statistic}) => {
  const Logo = () => {
    if (name === 'Vamos FC') {
      return <Image source={VamosFc} style={styles.logo} />;
    }
    if (name === 'Ve FC') {
      return <Image source={VeFc} style={styles.logo} />;
    }
    if (name === 'An Nahl') {
      return <Image source={AnNahl} style={styles.logo} />;
    }
    if (name === 'Arsyil FC') {
      return <Image source={ArsyilFc} style={styles.logo} />;
    }
    return <Image source={VamosFc} style={styles.logo} />;
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Logo />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.statistic}>
        <SmallButton text={statistic} />
      </View>
    </TouchableOpacity>
  );
};

export default Box;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    marginRight:20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 25,
  },
  logo: {width: 52, height: 52},
  name: {textAlign: 'center', fontSize: 12, fontFamily: fonts.primary.bold},
  statistic: {position: 'absolute', bottom: -13},
});
