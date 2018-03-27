import React, {Component} from 'react';
import {View, Text} from 'react-native'

export default class World extends Component {

    static navigationOptions = {
        title: 'World'
    };

    render() {
        const {navigate} = this.props.navigation;
        return <View>
            <Text onPress={() => navigate('Hello')}>Hello World</Text>
        </View>
    }
}