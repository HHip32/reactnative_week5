import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';

const index7 = () => {
    return (

        <View style={styles.container}>

            <Text style={styles.text1}>LOGIN</Text>
            <View style={styles.editUser}>
                <Image style={styles.imgUser} source={require('./assets/avatar_user.png')} />
                <TextInput
                    style={styles.inputUser}
                    defaultValue='Name'
                />
            </View>
            <View style={styles.editPass}>
                <Image style={styles.imgLockPass} source={require('./assets/lock1.png')} />
                <TextInput
                    style={styles.inputPass}
                    defaultValue='Password'
                />
                <Image style={styles.imgEyePass} source={require('./assets/eye.png')} />
            </View>
            <TouchableOpacity
                style={styles.btnRegis}
            >
                <Text style={styles.textOfBtnRegis}>LOGIN</Text>
            </TouchableOpacity>
            <Text
                style={styles.text2}
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

export default index7;