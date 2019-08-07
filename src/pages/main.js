import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

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
        <View style={ styles.productContainer}>
            <Text style={ styles.productTitle }>{ item.title }</Text>
            <Text style={styles.productDescription}>{ item.description }</Text>

            <TouchableOpacity style={ styles.ProductButton } onPress={ () => {} }>
                <Text style={ styles.productButtonText }>Acessar</Text>
            </TouchableOpacity>
        </View>
    );

    render(){
        return(
            <View style={ styles.container }>
                <FlatList
                    contentContainerStyle={ styles.list }
                    data={ this.state.docs }
                    keyExtractor={item => item._id}
                    renderItem={ this.renderItem }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA"
    },
    list: {
        padding: 20
    },

    productContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    productDescription: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },

    ProductButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552f",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    productButtonText: {
        fontSize: 16,
        color: "#DA552f",
        fontWeight: "bold"
    }
});