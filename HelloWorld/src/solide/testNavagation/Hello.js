import React, {Component} from 'react';
import {View, Text} from 'react-native'
import {} from 'react-navigation'

export default class Hello extends Component {

    //���õ���������
    static navigationOptions = {
        title: 'Hello'
    };

    render() {
        const {navigate} = this.props.navigation;

        return <View>
            //���õ���¼�
            <Text onPress={() => navigate('World')}>Hello Hello</Text>
        </View>
    }
}