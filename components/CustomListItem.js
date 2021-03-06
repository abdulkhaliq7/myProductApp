import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image, ListItem } from 'react-native-elements'
import { db } from "../firebase"
import { TouchableOpacity } from 'react-native'
import { AntDesign,SimpleLineIcons } from "@expo/vector-icons"


const CustomListItem = ({ id, productName, productDescription, productPrice, productImageUrl, deleteProduct, updateProduct, navigation, hideButton }) => {
    const image = {uri: productImageUrl}


    
    return (
        <ListItem key={id} bottomDivider>
            <Image source={image} 
                style={{ width: 150, height: 150}}
            />
            <ListItem.Content>
                <ListItem.Title style={{ color: 'black', fontWeight: 'bold', fontSize: 20 ,paddingBottom: 5 }}>
                    {productName}
                </ListItem.Title>
                <ListItem.Subtitle>
                    {productDescription}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{ color: 'black', fontWeight: 'bold', paddingTop: 5 }}>
                    {"$ "}{productPrice}
                </ListItem.Subtitle>
                {!hideButton && (
                    <ListItem.Subtitle style={{ marginTop: 10, flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.navigate('UpdateProduct', {id, productName, productDescription, productPrice, productImageUrl,})} style={{ marginRight:30 }} activeOpacity={0.5}>
                            <AntDesign name="edit" size={30} color= "black" />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => deleteProduct(id)} 
                            activeOpacity={0.5}
                        >
                            <SimpleLineIcons name="trash" size={30} color="black" />
                        </TouchableOpacity>
                    </ListItem.Subtitle>
                )}
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({
    button: {
        paddingRight: 25,
    },
})
