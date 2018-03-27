import {StackNavigator} from 'react-navigation'
import Hello from "./Hello";
import World from "./World"

export default NavData = StackNavigator({Hello: {screen: Hello}, World: {screen: World}})