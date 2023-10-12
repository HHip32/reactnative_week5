import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import index2 from './index2';

export default function index1() {
  const navigation = useNavigation();
  const handleTranForm = () => {
    navigation.navigate(index2)
  }
  const [text, setText] = useState('Hãy chia sẻ những điều mà bạn thích về sản phẩm');

  const handleFocus = () => {
    if (text === 'Hãy chia sẻ những điều mà bạn thích về sản phẩm') {
      setText('');
    }
  };

  const handleBlur = () => {
    if (text === '') {
      setText('Hãy chia sẻ những điều mà bạn thích về sản phẩm');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewOfUSBandText}>
        <View style={styles.viewOfUSB}>
          <Image style={styles.imgUSB} source={require('./assets/usb.png')} />
        </View>
        <Text style={styles.textOfUSB}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
      </View>
      <Text
        style={{ width: 259, height: 21, top: 70, fontFamily: 'Roboto', fontWeight: 700, fontSize: 18, lineHeight: 21.09, textAlign: 'center' }}
      >
        Cực kỳ hài lòng
      </Text>
      <View style={styles.viewOfStart}>
        <Image style={styles.start} source={require('./assets/start1.png')} />
        <Image style={styles.start} source={require('./assets/start2.png')} />
        <Image style={styles.start} source={require('./assets/start3.png')} />
        <Image style={styles.start} source={require('./assets/start4.png')} />
        <Image style={styles.start} source={require('./assets/start5.png')} />
      </View>
      <View style={styles.viewOfCamera}>
        <Image style={{ width: 39, height: 32 }} source={require('./assets/camera.png')} />
        <Text style={{ width: 120, height: 21, fontFamily: 'Roboto', fontWeight: 700, fontSize: 18, lineHeight: 21.09, marginLeft: 10 }}>Thêm hình ảnh</Text>
      </View>
      <View style={{ width: 293, height: 180, top: 160, borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          style={{ width: '90%', height: '80%', fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 21.09, color: '#C4C4C4' }}
          multiline={true}
          value={text}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={text => setText(text)}
        />
        <TouchableOpacity style={{ left: 35, top: 5 }}>
          <Text
            style={{ width: 205, height: 14, fontFamily: 'Roboto', fontWeight: 700, fontSize: 12, lineHeight: 14.06, textAlign: 'center', color: '#000000' }}
          >
            https://meet.google.com/nsj-ojwi-xpp
          </Text>
        </TouchableOpacity>
      </View>
      <Pressable
        style={{ width: 289, height: 41, backgroundColor: "#0D5DB6", borderWidth: 1, borderRadius: 5, borderBlockColor: '#1511EB', top: 190, justifyContent: 'center' }}
        onPress={handleTranForm}
      >
        <Text style={{ textAlign: 'center', fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 23.44, color: '#FFFFFF' }}>Gửi</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  viewOfUSBandText: {
    top: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'

  },
  viewOfUSB: {

    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',

  },
  imgUSB: {
    width: 100,
    height: 90,
  },
  textOfUSB: {
    top: 15,
    marginLeft: 20,
    width: 250,
    height: 100,
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 18.75,
  },
  viewOfStart: {
    width: '80%',
    flexDirection: 'row',
    top: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  start: {
    width: 39,
    height: 39
  },
  viewOfCamera: {
    width: 293,
    height: 68,
    top: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#322FED'
  }
});