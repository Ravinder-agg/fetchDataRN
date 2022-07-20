import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import React from "react"
import { TouchableOpacity } from "react-native"

export const Home = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView style={styles.mainContainer}>
                <ScrollView contentInsetAdjustmentBehavior='automatic' style={styles.scrollView} >
                    {/* <Image style={styles.image} source={require('../images/shutterstock_645747736.png')} /> */}
                    <View style={styles.body}>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() => {
                                navigation.navigate('Form', { name: 'Form' })
                            }}
                        >
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() => {
                                navigation.navigate('Content', { name: 'Content' })
                            }}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}







const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
    },
    body: {
        paddingHorizontal: 70,
    },
    image: {
        resizeMode: 'cover',
        position: 'absolute',
    },
    scrollView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    buttonStyle: {
        borderRadius: 10,
        backgroundColor: 'lightsalmon',
        padding: 5,
        paddingTop: 15,
        marginTop: 15,
        paddingBottom: 15,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
    },

})