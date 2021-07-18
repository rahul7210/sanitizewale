import { createStackNavigator } from 'react-navigation';
import Home from './screen/Home'
import newform from './src/components/newform'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  newform: { screen: newform},
});