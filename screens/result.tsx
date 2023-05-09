import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from '../components/title';

const Result = ({navigation, route}) => {
  const {score} = route.params;
  const resultBanner =
    score > 40
      ? require('../assets/Winners-pana.png')
      : require('../assets/Missed-chances-rafiki.png');
  return (
    <View style={styles.container}>
      <Title titleText="Result" />
      <Text style={styles.scoreValue}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={resultBanner}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.buttonText}>GO TO HOME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
