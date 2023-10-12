import { LinearGradient } from 'expo-linear-gradient'

import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import index3 from './index3';

export default function index2() {
  const navigation = useNavigation();
  const handleTranForm = () => {
    navigation.navigate(index3)
  }
  const [lowerCaseChecked, setLowerCaseChecked] = useState(false);
  const [upperCaseChecked, setUpperCaseChecked] = useState(false);
  const [numberChecked, setNumberChecked] = useState(false);
  const [specialSymbolChecked, setSpecialSymbolChecked] = useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#3B3B98', '#C4C4C400']}
        locations={[0, 0.8]}
        start={{ x: 0.5, y: 0.5 }} // Bắt đầu ở giữa (0.5, 0.5)
        end={{ x: 0, y: 0 }}     // Kết thúc ở góc dưới bên phải (1, 1)
        style={styles.gradient}
      >
        <View style={{ width: '90%', height: '95%', backgroundColor: '#23235B', borderRadius: 15, alignItems: 'center' }}>
          <Text style={{ top: 59, width: 181, height: 64, fontFamily: 'Roboto', fontWeight: 700, fontSize: 25, lineHeight: 29.3, textAlign: 'center', color: '#FFFFFF' }}>
            PASSWORD GENERATOR
          </Text>
          <TextInput style={{ width: 297, height: 55, marginTop: 100, backgroundColor: '#151537' }} />
          <View style={{ marginTop: 30, width: 297, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Text style={{ width: 223, height: 24, fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 23.44, color: '#FFFFFF' }}>
              Password length
            </Text>
            <TextInput style={{ width: 118, height: 33, backgroundColor: '#FFFFFF' }} />
          </View>
          <View style={{ marginTop: 20, width: 297, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ width: 247, height: 27, fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 23.44, color: '#FFFFFF' }}>
              Include lower case letters
            </Text>
            <CheckBox
              checked={lowerCaseChecked}
              uncheckedColor='#FFFFFF'
              checkedColor='#000000'
              onPress={() => setLowerCaseChecked(!lowerCaseChecked)}
            />
          </View>
          <View style={{ marginTop: 0, width: 297, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ width: 247, height: 27, fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 23.44, color: '#FFFFFF' }}>
              Include upcase letters
            </Text>
            <CheckBox
              checked={upperCaseChecked}
              uncheckedColor='#FFFFFF'
              checkedColor='#000000'
              onPress={() => setUpperCaseChecked(!upperCaseChecked)}
            />
          </View>
          <View style={{ marginTop: 0, width: 297, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ width: 247, height: 27, fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 23.44, color: '#FFFFFF' }}>
              Include number
            </Text>
            <CheckBox
              checked={numberChecked}
              uncheckedColor='#FFFFFF'
              checkedColor='#000000'
              onPress={() => setNumberChecked(!numberChecked)}
            />
          </View>
          <View style={{ marginTop: 0, width: 297, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ width: 247, height: 27, fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 23.44, color: '#FFFFFF' }}>
              Include special symbol
            </Text>
            <CheckBox
              checked={specialSymbolChecked}
              uncheckedColor='#FFFFFF'
              checkedColor='#000000'
              onPress={() => setSpecialSymbolChecked(!specialSymbolChecked)}
            />
          </View>
          <Pressable
            style={{ width: 269, height: 55, backgroundColor: '#3B3B98', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}
            onPress={handleTranForm}
          >
            <Text style={{ width: 259, height: 21, fontFamily: 'Roboto', fontWeight: 700, fontSize: 18, lineHeight: 21.09, color: '#FFFFFF', textAlign: 'center' }}>GENERATE PASSWORD </Text>
          </Pressable>
        </View>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }

});