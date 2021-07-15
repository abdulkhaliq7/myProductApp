import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image, ListItem } from 'react-native-elements'


const CustomListItem = ({ id, productName, productDescription, productPrice, productImageUrl }) => {
    const image = {uri: productImageUrl}

    return (
        <ListItem key={id} bottomDivider>
            <Image source={image} 
                style={{ width: 150, height: 150}}
            />
            <ListItem.Content>
                <ListItem.Title style={{ color: 'black', fontWeight: 'bold', paddingBottom: 5 }}>
                    {productName}
                </ListItem.Title>
                <ListItem.Subtitle>
                    {productDescription}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{ color: 'black', fontWeight: 'bold', paddingTop: 5 }}>
                    {productPrice}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{ marginTop: 7 }}>
                 <Button  containerStyle={styles.button} title='Update'/>
                 <Button  title='Delete'/>
                </ListItem.Subtitle>
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
