import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet,View } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import { KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { db, auth} from "../firebase"
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
        await db
                .collection('users')
                .doc(auth?.currentUser?.uid)
                .collection('products')
                .doc(idProduct)
                .update({
                    productName: name,
                })
                .then(() => {
                    // navigation.goBack()
                    alert('Product Name updated')
                })
                .catch((error) => alert(error))
    }

    const updateProductDesc = async () => {
        await db
                .collection('users')
                .doc(auth?.currentUser?.uid)
                .collection('products')
                .doc(idProduct)
                .update({
                    productDescription:description
                })
                .then(() => {
                    // navigation.goBack()
                    alert('Product Description updated')
                })
                .catch((error) => alert(error))
    }

    const updateProductPrice = async () => {
        await db
                .collection('users')
                .doc(auth?.currentUser?.uid)
                .collection('products')
                .doc(idProduct)
                .update({
                    productPrice: parseInt(price),
                })
                .then(() => {
                    // navigation.goBack()
                    alert('Product price updated')
                })
                .catch((error) => alert(error))
    }

    const updateProductImage = async () => {
        await db
                .collection('users')
                .doc(auth?.currentUser?.uid)
                .collection('products')
                .doc(idProduct)
                .update({
                    productImageUrl: imageUrl,
                })
                .then(() => {
                    // navigation.goBack()
                    alert('Product Image updated')
                })
                .catch((error) => alert(error))
    }

    const updateNameActivation = () => {
        if(name.length > 2) {
            updateProductName()
        } else {
            alert('Update product')
        }
    }

    const updateDescActivation = () => {
        if(description.length > 2) {
            updateProductDesc()
        } else {
            alert('Update product')
        }
    }

    const updatePriceActivation = () => {
        if(price.length > 2) {
            updateProductPrice()
        } else {
            alert('Update product')
        }
    }

    const updateImageActivation = () => {
        if(imageUrl.length > 2) {
            updateProductImage()
        } else {
            alert('Update product')
        }
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
                        onChangeText={ (text) => setName(text)}
                    />
                    <TouchableOpacity 
                            
                            onPress={updateNameActivation} 
                            activeOpacity={0.5}
                        >
                            <AntDesign name="check" size={30} color={name.length > 2 ? 'green' : 'red'} />
                    </TouchableOpacity>
                </View>
                
                <View style={{ flexDirection: 'row'}}>
                    <Input 
                        placeholder="Description"
                        type='text'
                        value={description}
                        onChangeText={ (text) => setDescription(text)}
                    />
                    <TouchableOpacity 
                            onPress={updateDescActivation} 
                            activeOpacity={0.5}
                        >
                            <AntDesign name="check" size={30} color={description.length > 2 ? 'green' : 'red'}/>
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
                            onPress={updatePriceActivation} 
                            activeOpacity={0.5}
                        >
                            <AntDesign name="check" size={30} color={price.length > 2 ? 'green' : 'red'} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row'}}>
                    <Input 
                        placeholder="Picture URL"
                        type='text'
                        value={imageUrl}
                        onChangeText={ (text) => setImageUrl(text)}
                    />
                    <TouchableOpacity 
                            onPress={updateImageActivation} 
                            activeOpacity={0.5}
                        >
                            <AntDesign name="check" size={30} color={imageUrl.length > 2 ? 'green' : 'red'} />
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
