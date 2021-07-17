import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet,View } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import { KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { db } from "../firebase"
import { TouchableOpacity } from 'react-native';
import { AntDesign,SimpleLineIcons } from "@expo/vector-icons"


const AddProductScreen = ({ route, navigation }) => {
    const [products, setProducts] = useState([])

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Update a Product",
            headerBackTitle: "Products",
        })
    }, [])

    const  idProduct  = route.params;

    const updateProductName = async () => {
        console.log(idProduct)
        await db.collection('products')
        .doc(idProduct)
        .update({
            productName: name,
        }).then(() => {
            // navigation.goBack()
            console.log('seccessuful')
        }).catch((error) => alert(error))
    }

    const updateProductDesc = async () => {
        console.log(idProduct)
        await db.collection('products')
        .doc(idProduct)
        .update({
        }).then(() => {
            // navigation.goBack()
            console.log('seccessuful')
        }).catch((error) => alert(error))
    }

    const updateProductPrice = async () => {
        console.log(idProduct)
        await db.collection('products')
        .doc(idProduct)
        .update({
            productPrice: price,
        }).then(() => {
            // navigation.goBack()
            console.log('seccessuful')
        }).catch((error) => alert(error))
    }

    const updateProductImage = async () => {
        console.log(idProduct)
        await db.collection('products')
        .doc(idProduct)
        .update({
            productImageUrl: imageUrl,
        }).then(() => {
            // navigation.goBack()
            console.log('seccessuful')
        }).catch((error) => alert(error))
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container} >
            <StatusBar style='light' />
            <Text h3 style={{ marginBottom: 15}}>
                Update a Product 
            </Text>
            <View style={styles.inputContainer}>
                <View style={{ flexDirection: 'row'}}>
                    <Input 
                        placeholder="Name"
                        autoFocus
                        type='text'
                        value={name}
                        // onSubmitEditing={updateProductName}
                        onChangeText={ (text) => setName(text)}
                    />
                    <TouchableOpacity 
                            
                            onPress={updateProductName} 
                            activeOpacity={0.5}
                        >
                            <AntDesign name="check" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                
                <View style={{ flexDirection: 'row'}}>
                    <Input 
                        placeholder="Description"
                        type='text'
                        value={description}
                        // onSubmitEditing={updateProductDesc}
                        onChangeText={ (text) => setDescription(text)}
                    />
                    <TouchableOpacity 
                            onPress={updateProductDesc} 
                            activeOpacity={0.5}
                        >
                            <AntDesign name="check" size={30} color="black ? black :red" />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row'}}>
                    <Input 
                        placeholder="Price"
                        type='text'
                        value={price}
                        onChangeText={ (text) => setPrice(text)}
                    />
                    <TouchableOpacity 
                            onPress={updateProductPrice} 
                            activeOpacity={0.5}
                        >
                            <AntDesign name="check" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row'}}>
                    <Input 
                        placeholder="Picture URL"
                        type='text'
                        value={imageUrl}
                        // onSubmitEditing={addProduct}
                        onChangeText={ (text) => setImageUrl(text)}
                    />
                    <TouchableOpacity 
                            onPress={updateProductImage} 
                            activeOpacity={0.5}
                        >
                            <AntDesign name="check" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: 40}} />
        </KeyboardAvoidingView>
    ) 
}

export default AddProductScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
    },
})
