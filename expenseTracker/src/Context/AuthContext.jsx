import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {BASE_URL} from '../Config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import { Alert } from "react-native";

export const AuthContext = createContext()

export const AuthProvider =({children})=>{
    const [userInfo, setuserInfo] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [splashLoading, setsplashLoading] = useState(true);

    const register = async(username , mobileNo, email, password) =>{
        let a="";
        setisLoading(true);
        await axios.post(`${BASE_URL}/register`,{
            username,
            mobileNo,
            email,
            password,
        })  
        .then((res)=>{
            setuserInfo(res.data);
            AsyncStorage.setItem('userInfo',JSON.stringify(res.data));
            setisLoading(false);
            a="success";
            console.log("registerd");
        })
        .catch((err)=>{
            setisLoading(false);
            console.log(err);
        })
        return a;
    }

    const login = async(mobileNo, password) =>{
        setisLoading(true);
        let a="";
        await axios.post(`${BASE_URL}/login`,{
            mobileNo,
            password,
        })
        .then((res)=>{
            if(res.data.status==="success"){
                setuserInfo(res.data);
                AsyncStorage.setItem('userInfo',JSON.stringify(res.data));
                setisLoading(false);
                console.log("sucess in api");
                a="success";
            }else if(res.data.status==="incorrect password"){
                Alert.alert("Incorrect password");
            }else{
                Alert.alert("User not found");
            }
            setisLoading(false);
        })
        .catch((err)=>{
            setisLoading(false);
            console.log(err);
        })
        return a;
    }

    const registerManagement = async(username , mobileNo, email, password)=>{
        let a="";
        setisLoading(true);
        await axios.post(`${BASE_URL}/register-management`,{
            username,
            mobileNo,
            email,
            password,
        })  
        .then((res)=>{
            setuserInfo(res.data);
            AsyncStorage.setItem('userInfo',JSON.stringify(res.data));
            setisLoading(false);
            a="success";
            console.log("registerd");
        })
        .catch((err)=>{
            setisLoading(false);
            console.log(err);
        })
        return a;
    }

    const LoginManagement = async(mobileNo, password) =>{
        setisLoading(true);
        let a="";
        await axios.post(`${BASE_URL}/login-management`,{
            mobileNo,
            password,
        })
        .then((res)=>{
            if(res.data.status==="success"){
                setuserInfo(res.data);
                AsyncStorage.setItem('userInfo',JSON.stringify(res.data));
                setisLoading(false);
                console.log("success in api");
                a="success";
            }else if(res.data.status==="incorrect password"){
                Alert.alert("Incorrect password");
            }else{
                Alert.alert("User not found");
            }
            setisLoading(false);
        })
        .catch((err)=>{
            setisLoading(false);
            console.log(err);
        })
        return a;
    }

    const logout = ()=>{
        try{
        setisLoading(true);
        AsyncStorage.removeItem('userInfo');
        setisLoading(false);
        }
        catch(err){
            console.log(err);
            setisLoading(false);
        }
    }

    const fetchData = async () => {
        try{
            let user = await AsyncStorage.getItem('userInfo');
            user = JSON.parse(user);
            if(user)
            setuserInfo(user);
            setsplashLoading(false);
        }catch(err){
            console.log(err);
            setsplashLoading(false);
        }
      };
      
      useEffect(() => {
        fetchData();
      }, []);
      

    return(
    <AuthContext.Provider value={{register,login,userInfo,splashLoading,logout,LoginManagement,registerManagement}}>
    <Spinner visible={isLoading} textContent={'Loading..'} />
        {children}
    </AuthContext.Provider>
    );
};