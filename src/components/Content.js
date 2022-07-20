import { useSelector } from "react-redux"
import React from "react"
import {View } from "react-native";

export const Content=()=>{
    const result=useSelector(x=>x.payload)
    // console.log(result);
    return (
        <View>
        </View>
    )
}