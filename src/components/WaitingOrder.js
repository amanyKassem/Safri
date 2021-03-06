import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
    I18nManager,
    ImageBackground,
    KeyboardAvoidingView
} from "react-native";
import {Container, Content, Form, Icon, Input, Item, Label} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";
import StarRating from "react-native-star-rating";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function WaitingOrder({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);


    return (
        <Container >
            <ImageBackground source={require('../../assets/images/splash_bg.png')} resizeMode={'cover'} style={styles.imageBackground}>
                <Content contentContainerStyle={[styles.bgFullWidth]}>
                    <View style={[styles.bgFullWidth, styles.Width_100 , styles.paddingHorizontal_25 , styles.flexCenter]}>

                        <Image source={require('../../assets/images/succes_icon.png')} style={[styles.icon100 , styles.marginBottom_40]} resizeMode={'contain'} />
                        <Text style={[styles.textBold , styles.text_mstarda , styles.textCenter , styles.textSize_20 ,styles.SelfCenter , styles.marginBottom_25]}>{ i18n.t('waitOrder') }</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('orderDetails', {orderType:0, pathName:'waitingOrder'})} style={[styles.mstrdaBtn , styles.Width_100 , styles.marginTop_60]}>
                            <Text style={[styles.textRegular , styles.text_White , styles.textSize_15]}>{ i18n.t('followOrder') }</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('home')} style={[styles.mstrdaBtn , styles.Width_100 , styles.marginTop_10]}>
                            <Text style={[styles.textRegular , styles.text_White , styles.textSize_15]}>{ i18n.t('home') }</Text>
                        </TouchableOpacity>

                    </View>
                </Content>
            </ImageBackground>
        </Container>
    );
}

export default WaitingOrder;


