
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
      userToken(token);
      // window.location.href = document.referrer;
      navigate(ROUTING.HOMEPAGE)
      location.reload()
      setUserObject(userName)
    }
    else {

      toast.error('invalid Login!');

    }
  }
  // User Login Ends

  // User Register Starts
  const handleRegister = (data) => {
    return axios.post(`${baseUrl}/users/register`, data)
  }
  const OnSuccessRegister = res =>{
    if (res?.data?.success){
      navigate(ROUTING.LOGIN)
    }
  }
  // User Register Ends


  return { handleLogin, handleRegister, onSuccessLogin, OnSuccessRegister }
}

export default AuthService