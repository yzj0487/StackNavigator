import React, {Component} from 'react';
import {View, Text} from 'react-native'

export default class World extends Component {

    //���õ���������
    static navigationOptions = {
        title: 'World'
    };

    render() {
        return <View>
            <Text>Hello World</Text>
        </View>
    }
}