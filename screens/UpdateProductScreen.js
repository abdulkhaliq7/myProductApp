import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet,View } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import { KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { db, auth} from "../firebase"
import { ScrollView, SafeAreaView } from 'react-native';
// import { TouchableOpacity } from 'react-native';
// import { AntDesign,SimpleLineIcons } from "@expo/vector-icons"


const AddProductScreen = ({ route, navigation }) => {

    const products = route.params

    const idProduct = products.id
    // {console.log(typeof(products.productPrice))}

    const [name, setName] = useState(products.productName)
    const [description, setDescription] = useState(products.productDescription)
    const [price, setPrice] = useState(products.productPrice)
    const [imageUrl, setImageUrl] = useState(products.productImageUrl)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Update Product",
            headerBackTitle: "Products",
        })
    }, [])


    const updateProduct = async () => {
        await db
                .collection('users')
                .doc(auth?.currentUser?.uid)
                .collection('products')
                .doc(idProduct)
                .update({
                    productName: name,
                    productDescription: description,
                    productPrice: parseFloat(price),
                    productImageUrl: imageUrl
                })
                .then(() => {
                    navigation.goBack()
                    // alert('Product Name updated')
                })
                .catch((error) => alert(error))
    }

    return (
        <SafeAreaView behavior='padding' style={styles.container} >
            <ScrollView>
                <StatusBar style='light' />
                <Text h3 style={{ marginBottom: 15, alignSelf: 'center', marginTop: 30}}>
                    Update Product 
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
                            onChangeText={ (text) => setImageUrl(text)}
                        />
                        {/* <TouchableOpacity 
                                onPress={updateImageActivation} 
                                activeOpacity={0.5}
                            >
                                <AntDesign name="check" size={30} color={imageUrl.length > 2 ? 'green' : 'red'} />
                        </TouchableOpacity> */}
                </View>
                <Button 
                    containerStyle={styles.button}
                    raised 
                    onPress={updateProduct} 
                    title='Update Product'
                    disabled={!name} 
                />
                <View style={{ height: 60}} />
            </ScrollView>
        </SafeAreaView>
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
        alignSelf: 'center'
    },
})
