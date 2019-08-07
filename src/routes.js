import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from "./pages/product";

const RootStack =  createStackNavigator({
    Main,
    Product
});

const MainStack = createAppContainer(RootStack);

export default MainStack;