import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index0 from './index0';
import index1 from './index1';
import index2 from './index2';
import index3 from './index3';


const Stack = createNativeStackNavigator();

const App = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="index0">
                <Stack.Screen name="index0" component={index0} options={{headerShown: false}}/>
                <Stack.Screen name="index1" component={index1} options={{headerShown: false}} />
                <Stack.Screen name="index2" component={index2} options={{headerShown: false}} />
                <Stack.Screen name="index3" component={index3} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F7C700',
    }

})

export default App;