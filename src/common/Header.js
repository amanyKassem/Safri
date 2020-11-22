import React, {useEffect} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions} from "react-native";
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import {useDispatch, useSelector} from "react-redux";
// import {getNotifications} from '../actions';

const height = Dimensions.get('window').height;
const isIOS = Platform.OS === 'ios';

function Header({navigation , title}) {

    // const lang          = useSelector(state => state.lang.lang);
    // const token         = useSelector(state => state.auth.user ? state.auth.user.data.token : null);
    // const user          = useSelector(state => state.auth.user ? state.auth.user.data :  {avatar: null});
    // const notifications = useSelector(state => state.notifications.notifications);

    const dispatch = useDispatch()

    // function fetchData(){
    //     dispatch(getNotifications(lang, token))
    // }
    //
    // useEffect(() => {
    //     fetchData();
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         fetchData();
    //     });
    //
    //     return unsubscribe;
    // }, [navigation]);

    return (
        <View style={[styles.marginTop_40 , styles.marginHorizontal_15 , styles.directionRowSpace , styles.marginBottom_20]}>

            <View style={[styles.directionRowSpace , styles.Width_100]}>

                <View style={[styles.directionRow]}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()} style={{marginRight:15}}>
                        <Image source={require('../../assets/images/menu.png')} style={[styles.icon23 , styles.transform]} resizeMode={'contain'} />
                    </TouchableOpacity>
                    {
                        title === i18n.t('home')  ?
                            <TouchableOpacity onPress={() => navigation.navigate('notification')} style={{marginRight:15}}>
                                <Image source={require('../../assets/images/notification_non_active.png')} style={[styles.icon23 , styles.transform]} resizeMode={'contain'} />
                            </TouchableOpacity>
                            :
                          null
                    }

                </View>

                {
                    title === i18n.t('home')  ?
                        <View style={[styles.directionRow]}>
                            <Text style={[styles.textRegular , styles.text_mstarda , styles.textSize_13]}>{i18n.t('orderPrice')} ٤٠٠ ريال</Text>
                           <View>
                               <TouchableOpacity onPress={() => navigation.navigate('basket')} style={{marginLeft:15}}>
                                   <Image source={require('../../assets/images/basket.png')} style={[styles.icon23 , styles.transform]} resizeMode={'contain'} />
                               </TouchableOpacity>
                               <View style={[styles.icon17 , styles.Radius_50 , styles.bg_mstarda , styles.justifyCenter ,{position:'absolute' , left:8 , top:0}]}>
                                   <Text style={[styles.textRegular , styles.text_White , styles.textSize_10 , styles.flexCenter]}>1</Text>
                               </View>
                           </View>

                        </View>
                        :
                        null
                }

            </View>

        </View>
    );
}

export default Header;


