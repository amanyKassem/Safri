import axios from 'axios';
import CONST from '../consts'
import {Toast} from "native-base";
import {AsyncStorage} from "react-native";


export const profile = (token) => {
    return (dispatch) => {
        axios({
            method      : 'POST',
            url         : CONST.url + 'profile',
            headers     : {Authorization: token}
        }).then(response => {
            const data = response.data;
            dispatch({type: 'profile_data', data})
        })
    }
};

export const updateProfile = (lang , name , phone ,country_id , avatar , token , navigation ) => {
    return (dispatch) => {
        axios({
            url: CONST.url + 'UpdateProfile',
            method      : 'POST',
            headers     : {Authorization: token },
            data        : { lang ,name , phone ,country_id , avatar }
        }).then(response => {

            dispatch({type: 'update_profile', data:response.data.data});

            if (response.data.success) {
                navigation.navigate('profile');
            }

            Toast.show({
                text        : response.data.message,
                type        : response.data.success ? "success" : "danger",
                duration    : 3000,
                textStyle       : {
                    color           : "white",
                    fontFamily      : 'flatRegular',
                    textAlign       : 'center'
                }
            });

        })
    }
}

// export const logout = (lang , token) => {
//     return (dispatch) => {
//         AsyncStorage.getItem('deviceID').then(device_id => {
//             axios({
//                 url         : CONST.url + 'Logout',
//                 method      : 'POST',
//                 headers     : { Authorization: token },
//                 data        : { lang ,device_id }
//             }).then(response => {
//                     AsyncStorage.multiRemove(['token', 'auth', 'profile']);
//                     dispatch({type: 'logout'})
//                 }
//             )
//         });
//     }
// };

export const logout = (lang , token) => {
    return (dispatch) => {
        AsyncStorage.multiRemove(['token', 'auth', 'profile']);

        AsyncStorage.getItem('deviceID').then(device_id => {
            axios({
                url         : CONST.url + 'Logout',
                method      : 'POST',
                headers     : { Authorization: token },
                data        : { lang ,device_id }
            }).then(response => { });
        });

        dispatch({type: 'logout'})
    }
};

