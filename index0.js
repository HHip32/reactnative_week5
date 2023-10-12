import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import index1 from './index1';

const index0 = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const validAccounts = [
        { username: 'hiep', password: '123' },
        { username: 'phan', password: '123' },
        // Thêm các tài khoản khác nếu cần
    ];
    function checkLogin(username, password) {
        // Kiểm tra xem thông tin đăng nhập có hợp lệ hay không
        const isLoginSuccessful = validAccounts.some((account) => {
            return account.username === username && account.password === password;
        });
        return isLoginSuccessful;
    }
    const handleLogin = () => {
        const isLoginSuccessful = checkLogin(username, password);
        if(isLoginSuccessful){
            Alert.Alert('Đăng nhập thành công!')
        }else{
            Alert.Alert('Đăng nhập thất bại!')
        }
    }
    const handleTranform = () => {
        navigation.navigate(index1)
    };
    return (

        <View style={styles.container}>

            <Text style={styles.text1}>LOGIN</Text>
            <View style={styles.editUser}>
                <Image style={styles.imgUser} source={require('./assets/avatar_user.png')} />
                <TextInput
                    style={styles.inputUser}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            <View style={styles.editPass}>
                <Image style={styles.imgLockPass} source={require('./assets/lock1.png')} />
                <TextInput
                    style={styles.inputPass}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <Image style={styles.imgEyePass} source={require('./assets/eye.png')} />
            </View>
            <TouchableOpacity
                style={styles.btnRegis}
                onPress={handleLogin}
            >
                <Text style={styles.textOfBtnRegis}>LOGIN</Text>
            </TouchableOpacity>
            <Text
                style={styles.text2}
                onPress={handleTranform}
            >CREATE ACCOUNT</Text>

        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F7C700',
    },
    text1: {
        width: '100%',
        height: 29,
        top: 100,
        left: 0,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 25,
        lineHeight: 29.3,
    },
    editUser: {
        top: 220,
        flexDirection: "row",
        width: 330,
        height: 54,
        backgroundColor: '#DDBE3C',
        paddingRight: 0,
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputUser: {
        flex: 1,
        height: '100%',
        marginLeft: 10,
    },
    imgUser: {
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: 'center',
        paddingLeft: 10,

    },
    editPass: {
        top: 250,
        flexDirection: "row",
        width: 330,
        height: 54,
        backgroundColor: '#DDBE3C',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 30
    },
    inputPass: {
        flex: 1,
        height: '100%',
        marginLeft: 10,
    },
    imgLockPass: {
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: 'center',
        paddingLeft: 10

    },
    imgEyePass: {
        width: 32,
        height: 32,
    },
    btnRegis: {
        width: 330,
        height: 45,
        top: 320,
        borderRadius: 2,
        backgroundColor: '#000000',
        justifyContent: "center",
        alignItems: "center"
    },
    textOfBtnRegis: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 23.44,
        color: '#FFFFFF'
    },
    text2: {
        top: 370,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 23.44,
        color: '#000000'
    },

})

export default index0;