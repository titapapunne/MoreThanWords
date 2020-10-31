import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Button, Alert } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LotsOfPods from './components/home'
import PodProgressBar from './components/ProgressBar'

const Stack = createStackNavigator();

import MainStackNavigator from './components/pod_components/MainStackNavigator.js';

export default function App() {  
    const [data, setData] = React.useState("default");
    fetch(Constants.manifest.extra.apiUrl).then(rawResult => rawResult.json()).then(jsonResult => {
        setData(jsonResult.data) 
    });
        
    return (
        <View> 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={LotsOfPods} />
            </Stack.Navigator>
        </NavigationContainer>
         <View style={styles.container}>
            {/* <Text>Open up App.js to start working on your app!</Text> */}
             {/* <Text>{data}</Text> */}
           <StatusBar style="auto" />
         {/* Home pods */}
             <LotsOfPods />
        </View>
       <MainStackNavigator />

       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});