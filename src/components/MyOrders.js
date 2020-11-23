import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions, FlatList, I18nManager} from "react-native";
import {Container, Content, Icon, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../common/Header';
import COLORS from "../consts/colors";

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';
const latitudeDelta = 0.922;
const longitudeDelta = 0.521;

function MyOrders({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const [active, setActive] = useState(0);
    const myOrders =[
        {id :'0',name:'مطاعم'  , price:'25 ر.س' , orderNum:'12345', image:require("../../assets/images/restu_image.png")},
        {id :'1',name:'محلات'  , price:'25 ر.س' , orderNum:'12345', image:require("../../assets/images/depart_two.png")},
        {id :'2',name:'مخابز'  , price:'25 ر.س' , orderNum:'12345', image:require("../../assets/images/depart_four.png")},
        {id :'3',name:'حلويات'  , price:'25 ر.س' , orderNum:'12345', image:require("../../assets/images/depart_six.png")},
    ]
    function Item({ name , image , price , orderNum , id , index }) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('category')} style={[styles.borderGray,styles.marginBottom_20 , styles.directionRow , styles.Radius_5 , {flex:1 , padding:15}]}>
                <View style={[styles.directionBasicRow , {flex:1}]}>
                    <Image source={image} style={[styles.icon70 , styles.Radius_7]} resizeMode={'cover'} />
                    <View style={[{marginLeft:15}]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{ name }</Text>
                        <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_14]}>{ price }</Text>
                    </View>
                </View>
                <View style={[{borderLeftWidth:1 , borderLeftColor:'#ddd' , paddingLeft:15} , styles.heightFull , styles.centerContext]}>
                    <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_14 , styles.marginBottom_5]}>{ i18n.t('orderNum') }</Text>
                    <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14]}>{ orderNum }</Text>
                </View>
            </TouchableOpacity>
        );
    }


    return (
        <Container style={[styles.bg_black]}>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.bg_black]}>

                <Header navigation={navigation} title={ i18n.t('myOrders') } />

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100, {overflow:'hidden'}]}>

                    <View style={[styles.directionRowSpace , styles.shadow , {width:'103%' , left:-4}]}>
                        <TouchableOpacity onPress={() => setActive(0)} style={[styles.paddingVertical_15 , styles.paddingHorizontal_15 , {borderBottomWidth:2 , borderBottomColor:active === 0 ? COLORS.mstarda : 'transparent'}]}>
                            <Text style={[styles.textBold , styles.text_gray , styles.textSize_13]}>{ i18n.t('orderInProgress') }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActive(1)} style={[styles.paddingVertical_15 , styles.paddingHorizontal_15 , {borderBottomWidth:2 , borderBottomColor:active === 1 ? COLORS.mstarda : 'transparent'}]}>
                            <Text style={[styles.textBold , styles.text_gray , styles.textSize_13]}>{ i18n.t('finishedOrders') }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActive(2)} style={[styles.paddingVertical_15 , styles.paddingHorizontal_15 , {borderBottomWidth:2 , borderBottomColor:active === 2 ? COLORS.mstarda : 'transparent'}]}>
                            <Text style={[styles.textBold , styles.text_gray , styles.textSize_13]}>{ i18n.t('canceledOrders') }</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.paddingHorizontal_20 , styles.marginTop_20]}>
                        <FlatList
                            data={myOrders}
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item , index}) => <Item
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                orderNum={item.orderNum}
                                index={index}
                            />}
                            keyExtractor={item => item.id}
                        />
                    </View>

                </View>

            </Content>
        </Container>
    );
}

export default MyOrders;


