/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {VamosFc, AnNahl, ArsyilFc, VeFc} from '../../assets';
import {colors, fonts} from '../../utils';

const UpdateScore = ({club1, club2, score1, score2, time, date}) => {
  const Logo = (name) => {
    if (name.name === 'Vamos FC') {
      return <Image source={VamosFc} style={styles.logo} />;
    }
    if (name.name === 'Ve FC') {
      return <Image source={VeFc} style={styles.logo} />;
    }
    if (name.name === 'An Nahl') {
      return <Image source={AnNahl} style={styles.logo} />;
    }
    if (name.name === 'Arsyil FC') {
      return <Image source={ArsyilFc} style={styles.logo} />;
    }
    return <Image source={VamosFc} style={styles.logo} />;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.box}>
          <Logo name={club1} style={styles.logo} />
          <Text style={styles.name}>{club1}</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.textScore}>
            {score1} : {score2}
          </Text>
        </View>
        <View style={styles.box2}>
          <View style={styles.box}>
            <Logo name={club2} style={styles.logo} />
            <Text style={styles.name}>{club2}</Text>
          </View>
        </View>
      </View>
      <View style={styles.time}>
        <Text>{date}</Text>
        <Text>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UpdateScore;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  box: {
    backgroundColor: colors.background,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 4,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal: 5,
  },
  logo: {width: 52, height: 52},
  name: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: fonts.primary.bold,
  },
  wrapper: {flexDirection: 'row'},
  time: {marginBottom: 15, alignItems: 'center'},
  score: {
    height: 21,
    paddingHorizontal: 4,
    paddingVertical: 1,
    backgroundColor: colors.background,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    position: 'relative',
    zIndex: 1,
    marginHorizontal: -16,
  },
  textScore: {
    fontSize: 14,
    color: colors.text.active,
    fontFamily: fonts.primary.bold,
  },
  box2: {marginRight: 25},
});
