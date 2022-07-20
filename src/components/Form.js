import { useState } from "react"
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../State/action";
import { TouchableOpacity } from "react-native";

export const Form = () => {
    // const result = useSelector(x => x.payload);
    // console.log(result);
    const dispatch = useDispatch();
    const [data, setData] = useState({
        chainId:4,
        username: "",
        mobileNumber: "",
        email: "",
        customUrl: "",
        userAddress: "",
        bio: "",
        profilePic: "",
        country: "",
        countrySymbol: "",
        countryCode: "",
    });
    // console.log(data);
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Register</Text>
            <TextInput
                style={styles.TextInput}
                value={data.username}
                placeholder="User Name"
                onChangeText={(text) => { setData({ ...data, username: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.mobileNumber}
                placeholder="MobileNumber"
                onChangeText={(text) => { setData({ ...data, mobileNumber: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.email}
                placeholder="Email"
                onChangeText={(text) => { setData({ ...data, email: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.customUrl}
                placeholder="Custom Url"
                onChangeText={(text) => { setData({ ...data, customUrl: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.userAddress}
                placeholder="User Address"
                onChangeText={(text) => { setData({ ...data, userAddress: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.bio}
                placeholder="Bio"
                onChangeText={(text) => { setData({ ...data, bio: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.profilePic}
                placeholder="Profile Pic"
                onChangeText={(text) => { setData({ ...data, profilePic: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.country}
                placeholder="Country"
                onChangeText={(text) => { setData({ ...data, country: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.countrySymbol}
                placeholder="Country Symbol"
                onChangeText={(text) => { setData({ ...data, countrySymbol: text }) }}
            />
            <TextInput
                style={styles.TextInput}
                value={data.countryCode}
                placeholder="Country Code"
                onChangeText={(text) => { setData({ ...data, countryCode: text }) }}
            />
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => { ;
                dispatch(postData(data)) }}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6FA',
        alignItems: 'center',
        marginTop: StatusBar.height,

    },
    TextInput: {
        backgroundColor: 'skyblue',
        borderRadius: 5,
        width: 250,
        height: 40,
        marginTop: 10,
        textAlign: 'center'
    },
    buttonStyle: {
        borderRadius: 10,
        backgroundColor: 'lightsalmon',
        width:200,
        marginTop: 10,
        paddingTop:6,
        paddingBottom:6
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
    },
})
