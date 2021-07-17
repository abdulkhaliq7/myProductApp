import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet,View } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import { KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { db } from "../firebase"

const AddProductScreen = ({ navigation }) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new Product",
            headerBackTitle: "Products",
        })
    }, [])

    const addProduct = async () => {
        await db.collection('products').add({
            productName: name,
            productDescription: description,
            productPrice: parseInt(price),
            productImageUrl: imageUrl
        }).then(() => {
            navigation.goBack()
        }).catch((error) => alert(error))
    }


    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container} >
            <StatusBar style='light' />
            <Text h3 style={{ marginBottom: 15}}>
                Add a new Product 
            </Text>
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Name"
                    autoFocus
                    type='text'
                    value={name}
                    onChangeText={ (text) => setName(text)}
                />
                <Input 
                    placeholder="Description"
                    type='text'
                    value={description}
                    onChangeText={ (text) => setDescription(text)}
                />
                <Input 
                    placeholder="Price"
                    type='text'
                    value={price}
                    onChangeText={ (text) => setPrice(text)}
                />
                <Input 
                    placeholder="Picture URL"
                    type='text'
                    value={imageUrl}
                    onSubmitEditing={addProduct}
                    onChangeText={ (text) => setImageUrl(text)}
                />
            </View>
            <Button 
                containerStyle={styles.button}
                raised 
                onPress={addProduct} 
                title='Add Product'
                disabled={!name} 
            />
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
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
    },
})
