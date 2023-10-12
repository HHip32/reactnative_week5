import { StyleSheet, Image, Text, View, TouchableOpacity, Pressable } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', height: 320, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
        <View style={{ width: '90%', top: 20, flexDirection: 'row' }}>
          <Image style={{ width: 104, height: 127 }} source={require('./assets/book.png')} />
          <View style={{ left: 25 }}>
            <Text style={{ width: 191, height: 14, fontFamily: 'Roboto', fontWeight: 700, fontSize: 12, lineHeight: 14.06, textAlign: 'center' }}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={{ top: 10, width: 140, height: 14, fontFamily: 'Roboto', fontWeight: 700, fontSize: 12, lineHeight: 14.06, }}> Cung cấp bởi Tiki Trading</Text>
            <Text style={{ top: 20, width: 84, height: 21, fontFamily: 'Roboto', fontWeight: 700, fontSize: 18, lineHeight: 21.09, color: '#EE0D0D' }}>141.800 đ</Text>
            <Text style={{ top: 30, width: 84, height: 50, color: '#808080', textDecorationLine: 'line-through' }}>141.000 đ</Text>
            <View style={{ top: 7, flexDirection: 'row' }}>
              <View style={{ width: 160, height: 20, flexDirection: 'row' }}>
                <Image style={{ width: 14.22, height: 16 }} source={require('./assets/btnminus.png')} />
                <Text style={{ width: 20, height: 18, fontFamily: 'Roboto', fontWeight: 700, fontSize: 15, lineHeight: 17.58, textAlign: 'center' }}>1</Text>
                <Image style={{ width: 16, height: 16 }} source={require('./assets/btnadd.png')} />
              </View>
              <Text style={{ width: 46, height: 14, fontFamily: 'Roboto', fontWeight: 700, fontSize: 12, lineHeight: 14.06, color: '#134FEC' }}>Mua sau</Text>
            </View>
          </View>
        </View>
        <View style={{ width: '90%', top: 50, flexDirection: 'row' }}>
          <Text style={{ width: 120, height: 14, fontFamily: 'Roboto', fontWeight: 700, fontSize: 14, lineHeight: 14.06, textAlign: 'center' }}>Mã giảm giá đã lưu</Text>
          <TouchableOpacity style={{ width: 100, height: 20, marginLeft: 10 }}>
            <Text style={{ width: 74, height: 14, fontFamily: 'Roboto', fontWeight: 700, fontSize: 14, lineHeight: 14.06, textAlign: 'center', color: '#134FEC' }}>Xem tại đây</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '90%', top: 100, flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', width: '65%', borderWidth: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <View style={{ width: 32, height: 16, marginLeft: 25, backgroundColor: '#F2DD1B' }} />
            <Text style={{ width: 100, height: 21, marginLeft: 15, fontFamily: 'Roboto', fontWeight: 700, fontSize: 18, lineHeight: 21.09, color: '#011627' }}>Mã giảm giá</Text>
          </View>
          <Pressable style={{ width: 99, height: 45, borderRadius: 2, backgroundColor: '#0A5EB7', justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
            <Text style={{ width: 75, height: 23, fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 23.44, textAlign: 'center', color: '#FFFFFF' }}>Áp dụng</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ width: '100%', height: 50, top: 40, backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ width: 227, height: 14, marginLeft: 30, fontFamily: 'Roboto', fontWeight: 700, fontSize: 12, lineHeight: 14.06, color: '#011627' }}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <TouchableOpacity style={{ width: 80, height: 16 }}>
          <Text style={{ width: 74, height: 14, fontFamily: 'Roboto', fontWeight: 700, fontSize: 12, lineHeight: 14.06, color: '#134FEC' }}>Nhập tại đây?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', height: 50, top: 60, backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ width: 227, height: 25, marginLeft: 30, fontFamily: 'Roboto', fontWeight: 700, fontSize: 18, lineHeight: 21.09, color: '#011627' }}>
          Tạm tính
        </Text>
        <Text style={{ width: 90, height: 25, fontFamily: 'Roboto', fontWeight: 700, fontSize: 18, lineHeight: 21.09, color: '#EE0D0D', textAlign: 'center' }}>141.800 đ</Text>
      </View>
      <View style={{ width: '100%', height: 103, top: 140, backgroundColor: '#FFFFFF', alignItems:'center' }}>
        <View style={{ width: '100%', marginTop: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ width: 227, height: 25, marginLeft: 30, fontFamily: 'Roboto', fontWeight: 700, fontSize: 18, lineHeight: 21.09, color: '#011627' }}>
            Thành tiền
          </Text>
          <Text style={{ width: 90, height: 25, fontFamily: 'Roboto', fontWeight: 700, fontSize: 18, lineHeight: 21.09, color: '#EE0D0D' }}>141.800 đ</Text>
        </View>
        <Pressable style={{width:331, height:45, marginTop: 10 ,borderRadius: 2, backgroundColor: '#E53935', justifyContent:'center', alignItems:'center'}}>
          <Text style={{width:228, height:23, fontFamily:'Roboto', fontWeight:700, fontSize: 20, lineHeight: 23.44, textAlign:'center', color:'#FFFFFF'}}>
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#C4C4C4'
  }

});