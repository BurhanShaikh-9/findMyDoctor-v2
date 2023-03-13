import React, { useState, useEffect } from 'react'
import './style.css';
import { Layout } from './webpage/layout';
import { HomePage } from './webpage/homePage/homePage';
import { BookDoctor } from './webpage/BookDoctor/bookDoctor';
import { BookLab } from './webpage/BookLab/bookLab';
import { ROUTING } from './utils/routes';
import { Routes, Route } from 'react-router-dom';
import { Insure } from './webpage/Insurance/insure';
import { Pharmacy } from './webpage/Pharmacy/pharmacy';
import { BuyingFor } from './webpage/Pharmacy/Buyer'
import { OurProducts } from './webpage/Pharmacy/ourProducts';
import { BestSeller } from './webpage/Pharmacy/bestSeller';
import { FrequentlyBought } from './webpage/Pharmacy/frequentlyBought';
import { OurCategories } from './webpage/Pharmacy/ourCategories';
import { Brands } from './webpage/Pharmacy/brands';
import { ProductItem } from './webpage/Pharmacy/ProductItem';
import { Cart } from './webpage/Pharmacy/cart';
import { CheckOut } from './webpage/Pharmacy/checkOut';
import { Login } from './webpage/Registration/login';
import { Signup } from './webpage/Registration/signup';
import tokenService from './services/token.service'
import { Contact } from './webpage/ContactUs/contact';
import { Greeting } from './webpage/Component/greeting';
import { Aboutus } from './webpage/aboutUs/aboutus';
import { ProfileLayout } from './webpage/profile/profileLayout';
import { Myprofile } from './webpage/profile/profilePages/myprofile';
import { Beneficiary } from './webpage/profile/profilePages/Beneficiary';
import { Reports } from './webpage/profile/profilePages/reports';
import { Insurance  as MyInsurance } from './webpage/profile/profilePages/insurance';
import { Billing } from './webpage/profile/profilePages/billing';
import { Payment } from './webpage/profile/profilePages/payment';
import { Logout } from './webpage/profile/profilePages/logout';
import { Prescibtion } from './webpage/profile/profilePages/prescibtion';
function App() {
  const { getToken, clearToken, getUserObject } = tokenService();
  const [userToken, setUserToken] = useState(getToken());
  const [username, setUserName] = useState(getUserObject())


  return (
    <div className="App">

      <Routes>
        <Route element={<Layout userLogged={userToken ? true : false} userName={username} />}>
          <Route path={ROUTING.HOMEPAGE} element={<HomePage />} />
          <Route path={ROUTING.BOOK_DOCTOR} element={<BookDoctor />} />
          <Route path={ROUTING.BOOK_LAB} element={<BookLab />} />
          <Route path={ROUTING.INSURANCE} element={<Insure />} />
          <Route path={ROUTING.PHARMACY} element={<Pharmacy />} >
            <Route path={ROUTING.OURPRODUCTS} element={<OurProducts />} />
            <Route path={ROUTING.BESTSELLER} element={<BestSeller />} />
            <Route path={ROUTING.FREQUENTLY_BOUGHT} element={<FrequentlyBought />} />
            <Route path={ROUTING.OUR_CATEGORIES} element={<OurCategories />} />
            <Route path={ROUTING.BRANDS} element={<Brands />} />
            <Route path={ROUTING.PRODUCT_ITEM} element={<ProductItem />} />
            <Route path={ROUTING.CART} element={<Cart />} />
            <Route path={ROUTING.CHECKOUT} element={<CheckOut />}></Route>
          </Route>
          <Route path={ROUTING.CONTACT} element={<Contact />}></Route>
          <Route path={ROUTING.ABOUTUS} element={<Aboutus />}></Route>
          <Route path={ROUTING.PROFILE} element={<ProfileLayout />}>
            <Route path={ROUTING.MYPROFILE} element={<Myprofile />}/>
            <Route path={ROUTING.BENEFICIARY} element={<Beneficiary />}/>
            <Route path={ROUTING.PRESCIPTION} element={<Prescibtion />}/>
            <Route path={ROUTING.REPORT} element={<Reports />}/>
            <Route path={ROUTING.MY_INSURANCE} element={<MyInsurance />}/>
            <Route path={ROUTING.BILLING} element={<Billing />}/>
            <Route path={ROUTING.PAYMENT} element={<Payment />}/>
            <Route path={ROUTING.LOGOUT} element={<Logout />}/>
          </Route>
          <Route path={ROUTING.LOGIN} element={<Login />} />
          <Route path={ROUTING.SIGNUP} element={<Signup />} />
          {/* <Route path={ROUTING.THANKYOU} element={Greeting}></Route> */}
        </Route>
      </Routes>

    </div>
  );
}

export default App;
