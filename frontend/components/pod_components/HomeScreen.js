import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import HomeScreenPod from './HomeScreenPod.js'

const server_add = Constants.manifest.extra.apiUrl;
const pods = ['Trainee', 'Associate', 'Partner']; // hardcoded pod names for data query and subsequent screens

export default class HomeScreen extends React.Component{
    render() {
        return(
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    {pods.map((pod, index) => {
                            return (
                                <HomeScreenPod
                                    pod={pod}
                                    key={index}
                                    route={this.props.route}
                                    navigation={this.props.navigation}
                                />
                            )
                        })}
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
