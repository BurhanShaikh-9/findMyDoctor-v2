
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ROUTING } from '../utils/routes'
import { toast } from 'react-toastify';
import tokenService from './token.service';

const AuthService = () => {
  const navigate = useNavigate();
  const baseUrl = 'https://fmd.arraydigitals.com/api';
  const { userToken, setUserObject } = tokenService();

  // User Login Starts
  const handleLogin = (data) => {
    return axios.post(`${baseUrl}/users/login`, data)
  }
  const onSuccessLogin = (res) => {
    if (res?.data?.success) {
      let token = res?.data?.token;
      let userName = res?.data?.data?.fullname;
      let id = res?.data?.data?.id;
      userToken(token);
      // window.location.href = document.referrer;
      navigate(ROUTING.HOMEPAGE)
      window.location.reload();
      setUserObject(userName, id)
    }
    else {

      toast.error('invalid Login!');

    }
  }

  // User Register Starts
  const handleRegister = (data) => {
    return axios.post(`${baseUrl}/users/register`, data)
  }
  const OnSuccessRegister = res =>{
    if (res?.data?.success){
      navigate(ROUTING.LOGIN)
    }
  }

  //user Profile
  const profileUpdate = (data) => {
    return axios.patch(`${baseUrl}/user-meta`, data)
  }

  //get User
  const getUserData = (data) =>{
    return axios.get(`${baseUrl}/user-meta`, data)
  }

  return { handleLogin, handleRegister, onSuccessLogin, OnSuccessRegister, getUserData }
}

export default AuthService