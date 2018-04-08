import React, {Component} from 'react';
import {View, Text} from 'react-native'


class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}


export default class World extends Component {

    //设置导航栏标题
    static navigationOptions = {
        title: 'World'
    };

    render() {
        const {params} = this.props.navigation.state;
        return <View>
            <Text>name : {params.name} age : {params.age}</Text>
            <Blink text='I love to blink' />
        </View>
    }
}