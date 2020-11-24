import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager, ImageBackground} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
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

function RestaurantDetails({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);


    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth]}>
                <ImageBackground source={require('../../assets/images/restu_image.png')} resizeMode={'cover'} style={[styles.Width_100 , styles.height_400]}>
                    <View style={[styles.overlay_black , styles.heightFull , styles.Width_100]}>

                        <Header navigation={navigation} title={ i18n.t('restaurantDetails') } />

                        <View style={[styles.directionColumnCenter , styles.marginTop_10]}>
                            <View style={[styles.icon70 , styles.Radius_50 , styles.overlay_white, styles.marginBottom_7 ,{ padding: 5 }]}>
                                <Image source={require('../../assets/images/image_placeholder.png')} style={[styles.Width_100 , styles.heightFull , styles.Radius_50]} resizeMode='cover' />
                            </View>
                            <Text style={[styles.textBold , styles.text_White , styles.textSize_14 , styles.textCenter , styles.marginBottom_5]}>اسم المطعم</Text>
                            <View style={[styles.directionRow , styles.marginTop_5]}>
                                <Icon type={'MaterialIcons'} name={'location-on'} style={[styles.textSize_14 , styles.text_mstarda , {marginRight:5}]} />
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_13]}>السعوديه - الرياض</Text>
                            </View>
                            <View style={[styles.directionRow , styles.marginTop_5]}>
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_13, {marginRight:5}]}>مسافه ٦ كيلو</Text>
                                <TouchableOpacity>
                                    <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_13, {marginRight:5}]}>( { i18n.t('locationOnMap') } )</Text>
                                </TouchableOpacity>
                            </View>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={4}
                                fullStarColor={'#fec104'}
                                starSize={12}
                                starStyle={{ marginHorizontal: 2 , marginTop:10 }}
                            />
                            <View style={[styles.paddingVertical_7 , styles.Width_60 , styles.centerContext, styles.marginTop_10,{backgroundColor:'#fca00263'}]}>
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_13, {marginRight:5}]}>{ i18n.t('minimumOrder') } ٥٠ ريال</Text>
                            </View>

                            <TouchableOpacity style={[styles.mstrdaBtn , styles.Width_60 , styles.marginTop_20]}>
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_15]}>{ i18n.t('addSpecialOrder') }</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ImageBackground>

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20, {overflow:'hidden'}]}>

                </View>

            </Content>
        </Container>
    );
}

export default RestaurantDetails;


