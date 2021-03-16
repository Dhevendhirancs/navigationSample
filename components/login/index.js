import React, { useState, useEffect, useRef } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    Input,
    TextInput,
    StatusBar
} from 'react-native'
import * as strings from '../utils/strings'
import * as constants from '../utils/constants'
import * as colors from '../utils/colors'
import * as dimens from '../utils/dimens'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import asyncstorage from "../utils/asyncstorage";
import { connect } from "react-redux";
import Toast from 'react-native-toast'

const Login = (props) => {
    const [username, setUsername] = useState(strings.empty)
    const [password, setPassword] = useState(strings.empty)
    const [errorField, setErrorField] = useState(constants.none)
    const [errorMessage, setErrorMessage] = useState(strings.empty)
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const passwordRef = useRef()
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo} />
            <TextInput
                value={username}
                onChangeText={(text) => setUsername(text)}
                placeholder={strings.username}
                placeholderTextColor={colors.placeholder}
                returnKeyType={'next'}
                onFocus={() => resetErrorFields()}
                style={styles.input} 
                onSubmitEditing={()=> passwordRef.current.focus()} />
            {errorField == constants.fieldUsername && <View style={styles.errorMessageView}>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>}
            <View style={styles.passwordView}>
                <TextInput
                    ref={passwordRef}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder={strings.password}
                    placeholderTextColor={colors.placeholder}
                    onFocus={() => resetErrorFields()}
                    returnKeyType={'done'}
                    secureTextEntry={!passwordVisibility}
                    style={styles.input} 
                    onSubmitEditing={()=> loginButtonPressed()}/>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setPasswordVisibility(!passwordVisibility)}
                    style={styles.eyeView}>
                    <Image
                        source={passwordVisibility
                            ? require('../../assets/images/eye.png')
                            : require('../../assets/images/eyeClose.png')}
                        style={styles.eye} />
                </TouchableOpacity>
            </View>
            {errorField == constants.fieldPassword && <View style={styles.errorMessageView}>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>}
            <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity
                    onPress={() => Toast.show(strings.devMessage)}
                    activeOpacity={0.8}
                    style={styles.forgotPasswordView}>
                    <Text style={styles.forgotPasswordText}>{strings.forgotPassword}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => loginButtonPressed()}
                style={styles.button}>
                <Text style={styles.continueText}>{strings.login}</Text>
            </TouchableOpacity>
            <View style={styles.signupView}>
                <Text style={styles.signupMessageText}>{strings.signupMessage} <Text onPress={()=> Toast.show(strings.devMessage)} style={styles.signupText}>{strings.signup}</Text></Text>
            </View>
        </View>
    )
    function resetErrorFields() {
        setErrorMessage(strings.empty)
        setErrorField(constants.none)
    }
    function loginButtonPressed() {
        if (username.length == 0) {
            setErrorMessage(strings.usernameFieldEmpty)
            setErrorField(constants.fieldUsername)
        } else if (password.length == 0) {
            setErrorMessage(strings.passwordFieldEmpty)
            setErrorField(constants.fieldPassword)
        } else if (username.toLowerCase() != 'johndoe') {
            setErrorMessage(strings.usernameNotExist)
            setErrorField(constants.fieldUsername)
        } else if (password != '123456') {
            setErrorMessage(strings.invalidPassword)
            setErrorField(constants.fieldPassword)
        } else {
            preceedForLogin()
        }
    }
    function preceedForLogin() {
        let user = {
            username: 'johndoe',
            firstname: 'john',
            lastname: 'doe',
            country: 'India',
            userType: 'Platinum'
        }
        asyncstorage.saveItem('user', user)
        props.setUserDetails({
            type: "SET_USER_DETAILS",
            payload: user
        });
        props.navigation.navigate('Products')
    }
}

const mapStateToProps = state => ({
    loginData: state.login
});

const mapDispatchToProps = dispatch => ({
    setUserDetails: data =>
        dispatch({
            type: data.type,
            payload: data.payload
        })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: wp('60%'),
        height: hp('8%'),
        marginBottom: hp('6%')
    },
    title: {
        fontSize: wp('10%'),
        color: colors.black
    },
    passwordView: {
        width: wp('90%'),
        height: hp('8%'),
        alignSelf: 'center',
        marginTop: hp('4%'),
        justifyContent: 'center'
    },
    input: {
        width: wp('90%'),
        height: hp('8%'),
        alignSelf: 'center',
        borderWidth: hp('0.1%'),
        borderColor: colors.black,
        borderRadius: wp('2%'),
        fontSize: wp('5%'),
        paddingHorizontal: wp('4%'),
        fontFamily: constants.themeFont
    },
    button: {
        width: wp('90%'),
        height: hp('8%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.theme,
        marginTop: hp('4%'),
        borderRadius: wp('2%')
    },
    continueText: {
        fontSize: wp('5%'),
        color: colors.white,
        fontFamily: constants.themeFont
    },
    errorMessageView: {
        width: wp('90%'),
    },
    errorMessage: {
        fontSize: wp('3%'),
        color: colors.errorText,
        fontFamily: constants.themeFont
    },
    eyeView: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
    },
    eye: {
        width: wp('8%'),
        height: wp('8%'),
    },
    forgotPasswordContainer: {
        width: '90%',
        alignSelf: 'center'
    },
    forgotPasswordView: {
        width: '50%',
        alignSelf: 'flex-end',
        paddingHorizontal: wp('2%'),
        paddingVertical: hp('0.5%'),
        alignItems: 'flex-end'
    },
    forgotPasswordText: {
        fontSize: wp('3%'),
        fontFamily: constants.themeFont,
        color: colors.theme
    },
    signupView: {
        marginTop: hp('4%')
    },
    signupText: {
        fontSize: wp('4%'),
        color: colors.theme,
        fontFamily: constants.themeFont
    },
    signupMessageText: {
        fontSize: wp('4%'),
        color: colors.black,
        fontFamily: constants.themeFont
    }
})