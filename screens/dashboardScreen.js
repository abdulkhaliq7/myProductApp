import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { auth, db } from '../firebase'
import { Avatar,Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import CustomListItem from '../components/CustomListItem'
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"

const HomeScreen = ( { navigation }) => {


    const [products, setProducts] = useState([])

    const [totalProduct, setTotalProduct] = useState([])

    const [totalPrice, setTotalPrice] = useState('')

    useEffect(() => {

        const totalPrices = totalProduct.reduce((total, price) => {
            return total + price.data
        }, 0)
        setTotalPrice(totalPrices)
        console.log(totalPrice)
    }, [totalProduct])
    

    


    useEffect(() => {

        const getProduct = async () => {
            await db.collection('users')
                    .doc(auth?.currentUser?.uid)
                    .collection('products')
                    .get()
                    .then((querySnapshot) => {
                        setTotalProduct(querySnapshot.docs.map((doc) => ({
                            // doc.data() is never undefined for query doc snapshots
                            // console.log(doc.id, " => ", doc.data());
                            data: doc.data().productPrice
                    })))
            });
        }
    getProduct()

    
    }, [])
    

    useEffect(() => {
        if(auth?.currentUser) {
            const unsubscribe = db
                                .collection('users')
                                .doc(auth?.currentUser?.uid)
                                .collection('products').orderBy('productPrice', 'desc').limit(5)
                                .onSnapshot(snapshot => {
                                    // console.log(snapshot.docs[0])
                                    setProducts(snapshot.docs.map(doc => ({
                                        id: doc.id,
                                        data: doc.data()
                                    })))
        })

        return unsubscribe
        } else {
            setProducts([])
        }
        
    }, [auth?.currentUser])

    // {console.log(products)} 

    const deleteProduct = async (id) => {
    // {console.log(id)}
        db
            .collection('users')
            .doc(auth?.currentUser?.uid)
            .collection('products')
            .doc(id)
            .delete().then(() => {
                console.log("Product Deleted")})
            .catch((error) => alert(error))
    }



    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Dashboard",
            headerStyle: { backgroundColor: "#fff"},
            headerTitleStyle: { color: "black"},
            headerTintColor: "black",
            // headerLeft: () => (
            //     <View style={{ marginLeft:10, flexDirection: 'row', alignItems: 'center' }} >
            //         <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')}  activeOpacity={0.5}>
            //             <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
            //         </TouchableOpacity>
            //         <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile', products)}  style={{ paddingLeft: 5}}  activeOpacity={0.5}>
            //             <Text>{auth?.currentUser?.displayName}</Text>
            //         </TouchableOpacity>
            //     </View>
            // ),

            // headerRight: () => (
            //     <View style={{
            //         flexDirection: "row",
            //         justifyContent:'space-between',
            //         width: 80,
            //         marginRight: 20,
            //     }}>
            //         <TouchableOpacity 
            //             onPress={() => navigation.navigate('dashboard')} 
            //             activeOpacity={0.5}>
            //             <AntDesign name="shoppingcart" size={24} color= "black" />
            //         </TouchableOpacity>
            //         <TouchableOpacity 
            //             onPress={() => navigation.navigate('AddProduct')} 
            //             activeOpacity={0.5}
            //         >
            //             <SimpleLineIcons name="plus" size={24} color="black" />
            //         </TouchableOpacity>
            //     </View>
            // )
        })
    }, [navigation])

    return (
        <SafeAreaView>
            <Text h4 style={{ marginBottom: 10, marginLeft: 20}}>
            Top Five most Expensive Products
            </Text>
            <Text h4 style={{ marginBottom: 10, marginLeft: 20}}>
            Total Products: {totalProduct.length}
            </Text>
            <Text h4 style={{ marginBottom: 10, marginLeft: 20}}>
            Total Price: $ {totalPrice}
            </Text>
            <ScrollView style={styles.container}>
                {products.map(({id, data: { productName, productDescription, productPrice, productImageUrl }}) => (
                    <CustomListItem key={id} id={id} productName={productName} productDescription={productDescription} productPrice={productPrice} productImageUrl={productImageUrl} deleteProduct={deleteProduct} navigation={navigation} hideButton />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        height: "100%"
    }
})
