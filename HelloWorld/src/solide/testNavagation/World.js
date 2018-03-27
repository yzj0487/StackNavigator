import React, {Component} from 'react';
import {View, Text} from 'react-native'

export default class World extends Component {

    //设置导航栏标题
    static navigationOptions = {
        title: 'World'
    };

    render() {
        return <View>
            <Text>Hello World</Text>
        </View>
    }
}