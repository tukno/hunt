import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const RootStack =  createStackNavigator({
    Main
});

const MainStack = createAppContainer(RootStack);

export default MainStack;