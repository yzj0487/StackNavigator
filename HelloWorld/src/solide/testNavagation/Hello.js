import React, {Component} from 'react';
import {View, Text} from 'react-native'
import {} from 'react-navigation'
import PropTypes from 'prop-types';

class TestProps extends Component {

    //指定属性的类型
    static propTypes = {name: PropTypes.string, age: PropTypes.string}

    //给属性设置默认值
    static defaultProps = {
        name: 'Solide'
    }

    render() {
        return (
            <Text>name: {this.props.name} age: {this.props.age}</Text>
        );
    }
}


export default class Hello extends Component {

    //设置导航栏标题
    static navigationOptions = {
        title: 'Hello'
    };

    render() {
        const {navigate} = this.props.navigation;

        return <View>

            <TestProps age='30'/>

            <TestProps name='DouBi'
                       age='31'/>

            <Text onPress={() => navigate('World', {name: 'DouBi', age: 31})}>Hello Hello</Text>
        </View>
    }
}