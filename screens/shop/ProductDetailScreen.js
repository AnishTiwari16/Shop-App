import React from 'react';
import {View, ScrollView, Text, Image, Button, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

const ProductDetailScreen = ({navigation,route}) => {
    const productId = route.params.productId;   //destructuring
    const selectedProduct = useSelector(state =>
        state.products.availableProducts.find(prodts => prodts.id === productId)  //this is state
        );  
        const dispatch = useDispatch();
    return (
        <ScrollView>
            <Image style = {styles.image} source = {{uri: selectedProduct.imageUrl}} />
            <View style = {styles.actions}>  
            <Button color = {Colors.primary} title = "Add to Cart" onPress={()=>{
                dispatch(cartActions.addToCart(selectedProduct));
            }} />
            </View>
            <Text style = {styles.price}>${selectedProduct.price}</Text>
            <Text style = {styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center',
    }
});
export default ProductDetailScreen;