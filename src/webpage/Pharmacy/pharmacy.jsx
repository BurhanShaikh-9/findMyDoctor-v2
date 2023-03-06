import React from 'react'
import self from '../../assets/images/BookDoctor/self.png'
import parent from '../../assets/images/BookDoctor/parents.png'
import wife from '../../assets/images/BookDoctor/wife.png'
import { Outlet, useMatch } from 'react-router-dom'
import { BuyingFor } from './Buyer'

export const Pharmacy = () => {
  const isMatch = useMatch("/:children");
  return (
    <main >
      <form className="pharmacy" >
        <section className="pharmacyBanner">
          <div className="banner">
            <div className="bannerInner">
              <div className="bannerText">
                <div className="container">
                  <div className="bannerInfo">
                    <p> <span>Pharmacy</span>  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
        </section>
        <div className="switchDiv" >
          
        {!!isMatch ? <BuyingFor/> : <Outlet/>}
        </div>

      </form>
    </main >
  )
}
