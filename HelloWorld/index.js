import {AppRegistry} from 'react-native';
import App from './src/solide/testNavagation/Nav';

// 这里要注意是StackNavigator去注册启动
AppRegistry.registerComponent('HelloWorld', () => App);
