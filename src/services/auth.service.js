
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ROUTING } from '../utils/routes'
import { toast } from 'react-toastify';
import tokenService from './token.service';

const AuthService = () => {
  const navigate = useNavigate();
  const baseUrl = 'https://fmd.arraydigitals.com/api';
  const { userToken, setUserObject } = tokenService();

  //USER REGISTRATION STARTS
  // User Login Starts
  const handleLogin = (data) => {
    return axios.post(`${baseUrl}/users/login`, data)
  }
  const onSuccessLogin = (res) => {
    if (res?.data?.success) {
      let token = res?.data?.token;
      let userData = res?.data?.data;
      userToken(token);
      navigate(ROUTING.HOMEPAGE)
      window.location.reload();
      setUserObject(userData)
    }
    else {
      toast.error('invalid Login!');
    }
  }
  // User Register Starts
  const handleRegister = (data) => {
    return axios.post(`${baseUrl}/users/register`, data)
  }
  const OnSuccessRegister = res => {
    if (res?.data?.success) {
      navigate(ROUTING.LOGIN)
    }
  }
  //USER REGISTRATION ENDS

  //Update USER DATA
  const patchUserData = (data) =>{
    return axios.patch(`${baseUrl}/users/update`, data)
  }

  //USER META DATA STARTS
  //Post UserMetaData
  const postUserMeta = (data) => {
    return axios.post(`${baseUrl}/user-meta`, data)
  }
  //Update UserMetaData
  const updateUserMeta = (data) => {
    return axios.patch(`${baseUrl}/user-meta`, data)
  }
  //get UserMetaData
  const getUserData = (data) => {
    return axios.get(`${baseUrl}/user-meta`, { data })
  }

  return { handleLogin, handleRegister, onSuccessLogin, OnSuccessRegister, getUserData, patchUserData }
}

export default AuthService