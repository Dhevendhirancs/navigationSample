import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    StatusBar,
    ScrollView
} from 'react-native'
import * as strings from '../utils/colors'
import * as constants from '../utils/constants'
import * as colors from '../utils/colors'
import * as dimens from '../utils/dimens'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import CustomHeader from './customHeader'
import { connect } from "react-redux";
import { FlatList } from 'react-native-gesture-handler'
import { productList } from '../utils/samples'
import Product from './product'

const Profile = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.theme} barStyle={'default'} />
            <CustomHeader
                menuPressed={() => menuPressed()} />
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={true}>
                <View style={styles.coverPhotoContainer}>
                    <View style={styles.coverPhotoView}>

                    </View>
                    <Image
                        source={require('../../assets/images/profile.png')}
                        style={styles.image} />
                </View>
                <View style={styles.detailsView}>
                    <Text style={styles.username}>{props.loginData.userDetails.username}</Text>
                    <Text style={styles.country}>{props.loginData.userDetails.country}</Text>
                    <Text style={styles.country}>{props.loginData.userDetails.userType} User</Text>
                </View>
                <View style={styles.contentView}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={productList}
                        renderItem={(item, index) => renderProducts(item.item, item.index)}
                        numColumns={3} />
                </View>
            </ScrollView>
        </View>
    )
    function renderProducts(item, index) {
        return (
            <Product
                item={item}
                index={index} />
        )
    }
    function menuPressed() {
        props.navigation.openDrawer()
    }
}

const mapStateToProps = state => ({
    loginData: state.login
});

export default connect(
    mapStateToProps
)(Profile);

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
    },
    coverPhotoContainer: {
        width: '100%',
        height: hp('24%'),
    },
    coverPhotoView: {
        width: '100%',
        height: hp('16%'),
        backgroundColor: colors.theme,
        borderBottomLeftRadius: wp('10%'),
        borderBottomRightRadius: wp('10%')
    },
    imageView: {
        width: wp('100%'),
        height: hp('30%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: hp('16%'),
        height: hp('16%'),
        position: 'absolute',
        borderRadius: (hp('16%') / 2) + 1,
        bottom: 0,
        alignSelf: 'center',
        borderWidth: wp('1%'),
        borderColor: colors.white
    },
    detailsView: {
        width: wp('100'),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: hp('2%'),
        flexDirection: 'column'
    },
    username: {
        fontSize: wp('7%'),
        color: colors.black,
        fontFamily: constants.themeFont
    },
    country: {
        fontSize: wp('5%'),
        color: colors.black,
        fontFamily: constants.themeFont
    },
    contentView: {
        width: wp('100%')
    }
})