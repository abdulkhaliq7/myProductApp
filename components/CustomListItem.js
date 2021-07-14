import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image, ListItem } from 'react-native-elements'

const CustomListItem = () => {
    return (
        <ListItem>
            <Image source={{
                uri: "https://i.ytimg.com/vi/fU5eKGNCT30/maxresdefault.jpg",
                }} 
                style={{ width: 150, height: 150}}
            />
            <ListItem.Content>
                <ListItem.Title style={{ color: 'black', fontWeight: 'bold', paddingBottom: 5 }}>
                    Rolls Royce Wraith
                </ListItem.Title>
                <ListItem.Subtitle>
                Rolls-Royce Wraith offers the utmost in luxury and comfort. 
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{ color: 'black', fontWeight: 'bold', paddingTop: 5 }}>
                    $200k
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
