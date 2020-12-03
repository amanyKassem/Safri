import React from "react";import { createStackNavigator } from '@react-navigation/stack';import {useSelector} from "react-redux";import Login                    from "../components/Login";import Language 				from "../components/Language";import Intro 					from "../components/Intro";import ForgetPassword 			from "../components/ForgetPassword";import ChangePass 				from "../components/ChangePass";import Register 				from "../components/Register";import ActivationCode 			from "../components/ActivationCode";import { MainStackNavigator }   from './MainStackNavigator'const AuthStack = createStackNavigator();export function AuthStackNavigator()  {	const lang = useSelector(state => state.lang.lang);	return(		<AuthStack.Navigator mode={'modal'} screenOptions={{headerShown: false}}>			{ lang == null ? <AuthStack.Screen name="language" component={Language} /> : null }			<AuthStack.Screen name="intro" component={Intro} />			<AuthStack.Screen name="login" component={Login} />			<AuthStack.Screen name="forgetPassword" component={ForgetPassword} />			<AuthStack.Screen name="changePass" component={ChangePass} />			<AuthStack.Screen name="register" component={Register} />			<AuthStack.Screen name="activationCode" component={ActivationCode} />			<AuthStack.Screen name="MainStack" component={MainStackNavigator} />		</AuthStack.Navigator>	);}