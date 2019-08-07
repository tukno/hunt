import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, FlatList, TouchableOpacity } from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title: 'JSHunt',
        headerStyle:{
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    }

    state = {
        docs: []
    };

    componentDidMount(){
        this.loadProducts();
    }

    //Comunica com a API e carrega os produtos
    loadProducts = async () => {
        const response = await api.get('/products');
        const { docs } = response.data;

        this.setState({ docs });
    }

    //Render a product
    renderItem = ({ item }) => (
        <View>
            <Text>{ item.title }</Text>
            <Text>{ item.description }</Text>

            <TouchableOpacity onPress={ () => {} }>
                <Text>Acessar</Text>
            </TouchableOpacity>
        </View>
    );

    render(){
        return(
            <View>
                <FlatList
                    data={ this.state.docs }
                    keyExtractor={item => item._id}
                    renderItem={ this.renderItem }
                />
            </View>
        );
    }
}