/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
  ScrollView,
} from 'react-native';
import {colors, fonts} from '../../utils';
import {Header, Service, SmallButton, Box, UpdateScore} from '../../components';
import {Banner} from '../../assets';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: 'booking',
    };
  }

  clickService(value) {
    this.setState({
      service: value,
    });
  }
  render() {
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapper}>
            <Header />
            <TouchableOpacity>
              <Image source={Banner} style={styles.banner} />
            </TouchableOpacity>
          </View>
          <Text style={styles.normal}>
            Ayo <Text style={styles.bold}>Wayahe Futsal</Text>
          </Text>
          <View style={styles.service}>
            <Service
              title="Paket Langganan"
              onPress={() => this.clickService('paket')}
              active={this.state.service === 'paket' ? true : false}
            />
            <Service
              title="Booking Lapangan"
              onPress={() => this.clickService('booking')}
              active={this.state.service === 'booking' ? true : false}
            />
            <Service
              title="Join Team"
              onPress={() => this.clickService('join')}
              active={this.state.service === 'join' ? true : false}
            />
          </View>
          <View style={styles.wrapperTitle}>
            <Text style={styles.normal}>
              Pilih Tim <Text style={styles.bold}>Sparing</Text> Kamu
            </Text>
            <SmallButton text="Lihat Semua " />
          </View>
          <View style={styles.scrollWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.club}>
                <Box name="Vamos FC" statistic="WWWW" />
                <Box name="Ve FC" statistic="WWWW" />
                <Box name="An Nahl" statistic="WWWW" />
                <Box name="Arsyil FC" statistic="WWWW" />
                <Box name="Arsyil FC" statistic="WWWW" />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperTitle}>
            <Text style={styles.normal}>Update Score</Text>
            <SmallButton text="Lihat Semua " />
          </View>
          <View style={styles.scrollWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.club}>
                <UpdateScore
                  club1="Vamos FC"
                  club2="An Nahl"
                  score1="5"
                  score2="5"
                  date="Rabu, 1 Desember 2020"
                  time="19.00 WIB"
                />
                <UpdateScore
                  club1="Ve FC"
                  club2="Arsyil FC"
                  score1="5"
                  score2="0"
                  date="Rabu, 1 Desember 2020"
                  time="21.00 WIB"
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapper: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  wrapperTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,
    alignItems: 'center',
  },
  banner: {
    marginTop: windowHeight * 0.016,
    width: '100%',
    height: windowHeight * 0.17,
  },
  bold: {fontFamily: fonts.primary.bold, fontSize: 18},
  normal: {fontFamily: fonts.primary[400], fontSize: 18, paddingHorizontal: 10},
  service: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 35,
  },
  club: {
    flexDirection: 'row',
    paddingTop: 20,
    marginHorizontal: 15,
  },
  scrollWrapper: {},
});
