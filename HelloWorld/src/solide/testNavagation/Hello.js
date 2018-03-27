import React, {Component} from 'react';
import {View, Text} from 'react-native'
import {} from 'react-navigation'

export default class Hello extends Component {

    //设置导航栏标题
    static navigationOptions = {
        title: 'Hello'
    };

    render() {
        const {navigate} = this.props.navigation;

        return <View>
            //设置点击事件
            <Text onPress={() => navigate('World')}>Hello Hello</Text>
        </View>
    }
}