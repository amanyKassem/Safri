import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    I18nManager,
    ImageBackground,
    FlatList
} from "react-native";
import {CheckBox, Container, Content, Form, Icon, Input, Item, Label, Textarea} from 'native-base'
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

function ProductDetails({navigation,route}) {

    // const lang = useSelector(state => state.lang.lang);
    // const token = useSelector(state => state.auth.user ? state.auth.user.data.token : null);

    const [checkedArr, setCheckedArr] = useState([]);
    const [GetID, setGetID] = useState([]);

    const ingredients = [
        {id:0 , name:'بطاطس' , price:'20 رس'},
        {id:1 , name:'بطاطس' , price:'20 رس'},
        {id:2 , name:'بطاطس' , price:'20 رس'},
        {id:3 , name:'بطاطس' , price:'20 رس'},
    ]


    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            setCheckedArr([])
        })
        return unsubscribe

    }, [navigation, route]);


    function toggleChecked(id){
        if(!checkedArr.includes(id)){
            setCheckedArr([...checkedArr,id])
        }else{
            const index = checkedArr.indexOf(id);
            if (index > -1) {
                checkedArr.splice(index, 1)
                setCheckedArr([...checkedArr]);
            }
        }
    }

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth]}>
                <ImageBackground source={require('../../assets/images/restu_image.png')} resizeMode={'cover'} style={[styles.Width_100 , styles.height_230 , {borderBottomRightRadius:25 , borderBottomLeftRadius:25 , overflow:'hidden'}]}>
                    <View style={[styles.overlay_black , styles.heightFull , styles.Width_100]}>

                        <Header navigation={navigation} title={ i18n.t('productDetails') } />

                    </View>
                </ImageBackground>

                <View style={[styles.bgFullWidth ,styles.bg_White, styles.Width_100,styles.paddingHorizontal_20 , styles.marginTop_20, {overflow:'hidden'}]}>

                    <View style={[styles.bg_lightMstarda,styles.paddingHorizontal_15  , styles.paddingVertical_10 , styles.directionRowSpace]}>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 ]}>{i18n.t('orderNum') }</Text>
                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 ]}>12345</Text>
                    </View>

                    <View style={[styles.directionRowSpace, styles.marginTop_20]}>
                        <Text style={[styles.textBold , styles.text_gray , styles.textSize_16]}>اسم المنتج</Text>
                        <Text style={[styles.textBold , styles.text_mstarda , styles.textSize_16 ]}>20 ر.س</Text>
                    </View>

                    <Text style={[styles.textRegular , styles.text_midGray , styles.textSize_13 , styles.marginTop_15 , {lineHeight:24}]}>
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                        أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام أي كلااااااام
                    </Text>

                    <View style={[styles.line , styles.marginVertical_20]}/>

                    <Text style={[styles.textBold , styles.text_gray , styles.textSize_16 , styles.alignStart , styles.marginBottom_20]}>{i18n.t('ingredients') }</Text>

                    <FlatList
                        data={ingredients}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) =>
                            (
                                <View style={[styles.directionRowSpace , styles.marginBottom_10]}>
                                    <TouchableOpacity onPress={() => toggleChecked(item.id)} style={[styles.directionRow]}>
                                        <CheckBox
                                            checked={checkedArr.indexOf(item.id) !== -1} color={checkedArr.indexOf(item.id) !== -1 ? COLORS.mstarda : '#ddd'}
                                            style={[ styles.checkBox , styles.Radius_3 , { backgroundColor: checkedArr.indexOf(item.id) !== -1 ? COLORS.mstarda : '#ddd' }]}
                                            onPress={() => toggleChecked(item.id)}
                                        />

                                        <Text style={[styles.textRegular , styles.text_gray , styles.textSize_14 ]}>{item.name}</Text>
                                    </TouchableOpacity>
                                    <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_14 ]}>{item.price}</Text>
                                </View>
                            )}
                    />
                    <View style={[styles.line , styles.marginVertical_20]}/>

                </View>

            </Content>
        </Container>
    );
}

export default ProductDetails;


