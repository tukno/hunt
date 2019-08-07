import React, { Component } from 'react';
import api from '../services/api';

import { View, Text } from 'react-native';

export default class Main extends Component {

    static navigationOptions = {
        title: 'JSHunt',
        headerStyle:{
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    }

    componentDidMount(){
        this.loadProducts();
    }

    //Comunica com a API e carrega os produtos
    loadProducts = async () => {
        const response = await api.get('/products');
        const { docs } = response.data;

        console.log(docs);
    }

    render(){
        return(
            <View>
                <Text>Página Main</Text>
            </View>
        );
    }
}