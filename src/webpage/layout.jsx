import React, {useState, useEffect} from 'react'
import { Header } from './Component/header'
import { Outlet} from 'react-router-dom'
import { Footer } from './Component/footer'

export const Layout = (props) => {

  const [username, setUserName] = useState('');
  useEffect(() => {
      let result = props.userName;
      result = result?.substring(1, result?.length - 1);
      result = result?.charAt(0).toUpperCase() + result?.slice(1);
      setUserName(result)
    }, [username]);

  return (
    <>
        <Header userLoggedIn={props.userLogged}  userName={username}/>
        <Outlet/>
        <Footer/>

    </>
  )
}
