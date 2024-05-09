import {  Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LoginImg from '../Login/images/LoginPageImg.png'
import Logo from '../Login/images/MaddieLogo.png'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation()
  return (
    <View style={{flex:1}}>
        <Image source={LoginImg}/>
        <View style={styles.Container}>
            <Text style = {styles.welcomeTxt}>Welcome To MaDLearn</Text>
            <Image source={Logo} style={{height:150,width:150,marginTop:50,marginLeft:120}}/>

            <Text style = {styles.LoginText}>Login/SignUp</Text>
        </View>
        <View>

        </View>
        <TouchableOpacity  onPress={()=> navigation.navigate('Home')} style={styles.button}>
            <AntDesign name="google" size={24} color="white" />
            <Text style={{color : "#fff"}}>Login/Signup With Google</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    welcomeTxt : {
        fontSize : 30,
        textAlign : "center",
        fontWeight : "bold",
        marginTop : 40,
        
    },
    Container : {
        // borderWidth : 4,
        borderTopEndRadius : 25,
        borderTopLeftRadius : 25,
        marginTop : -10,
    
        padding : 1
    },
    LoginText : {
        fontWeight : "700",
        fontSize : 16,
        textAlign : "center",
        marginTop : 100,
        
    },
    button : {
        backgroundColor : "#0C7DE4",
        margin : 30 ,
        padding : 10,
        display : "flex",
        flexDirection : "row",
        gap : 10,
        justifyContent : "center",
        alignItems : "center", 
        borderRadius : 10
        
    }
})