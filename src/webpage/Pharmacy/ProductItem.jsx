import React, { useState } from 'react'
import acefyl from '../../assets/images/Pharmacy/acefyl22.png'
import { Link } from 'react-router-dom';
import { ROUTING } from '../../utils/routes';

export const ProductItem = () => {
    const [count, setCount] = useState(1);

    const counter = (e) => {
        e.preventDefault();
        setCount(count + 1);
    }
    const decreaseCounter = e => {
        e.preventDefault();

        if (count > 1) {
            setCount(count - 1);
        }
        else {
            setCount(count)
        }
    }

    return (
        <>
            <div className='productItem'>
                <div className="container">
                    <div className="productMain">
                        <div className="container">


                            <div className="row g-5">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" align="center">
                                    <div className="itemImageMain">
                                        <div className='itemImageInner'>
                                            <img src={acefyl} alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="AboutItem">
                                        <div className="sale"> <p>Sale Off</p> </div>
                                        <div className="productName">Acefyl Respiratory Syrup</div>
                                        <div className="rating">
                                            <div className="stars">
                                                <span> <i className="bi bi-star-fill "></i></span>
                                                <span> <i className="bi bi-star-fill "></i></span>
                                                <span> <i className="bi bi-star-fill "></i></span>
                                                <span> <i className="bi bi-star-fill "></i></span>
                                                <span> <i className="bi bi-star "></i></span>
                                            </div>
                                            <div className="review">
                                                <p>2 Reviews</p>
                                            </div>
                                        </div>
                                        <div className="pricing">
                                            <p>500 PKR</p>
                                            <div className="saves">
                                                <span>25% off</span><small> <strike> 600 PKR</strike></small>
                                            </div>
                                        </div>
                                        <div className='summary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum repellat ipsam magnam corrupti ratione modi cum omnis recusandae sunt at.</div>
                                        <div className='addition'>
                                            <div className="counter">
                                                <div className="counterNumber">
                                                    <p className="number">{count}</p>
                                                </div>

                                                <div className="counterButtons">
                                                    <button onClick={counter} ><i className="bi bi-caret-up"></i></button>
                                                    <button onClick={decreaseCounter} ><i className="bi bi-caret-down"></i></button>
                                                </div>
         
                                            </div>
                                            <div className="addToCartButton">
                                                <Link to={ROUTING.CART} ><i className="bi bi-cart2"></i> Add To Cart</Link>
                                            </div>
                                            <div className="favoriteButton">
                                                <button><i className="bi bi-heart"></i></button>
                                            </div>
                                        </div>
                                        <div className="itemInfo">
                                            <div className="firstCol">
                                                <p>Brand: <span>LawnMaster</span> </p>
                                                <p>MFG: <span>Jun 4.2023</span> </p>
                                                <p>LIFE: <span>1 Year 20 Days</span>  </p>
                                            </div>
                                            <div className="secondCol">
                                                <p>item Weight: <span>2 Pounds</span> </p>
                                                <p>Tags: <span>Lorem lypsum.</span> </p>
                                                <p>Stock: <span>8 Items in Stock</span> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="card" >
                                        <div className="card-body">
                                            <div className="switchButton">
                                                <div className="radioButton">
                                                    <input type="radio" name='itemDescriptionRadio' id='radioDescId' defaultChecked />
                                                    <label htmlFor='radioDescId'>Description</label>
                                                </div>
                                                <div className="radioButton">
                                                    <input type="radio" name='itemDescriptionRadio' id='radioAdditionId'/>
                                                    <label htmlFor='radioAdditionId'>Additional Info</label>
                                                </div>
                                                <div className="radioButton">
                                                    <input type="radio" name='itemDescriptionRadio' id='radioVendorId'/>
                                                    <label htmlFor='radioVendorId'>Vendor</label>
                                                </div>
                                                <div className="radioButton">
                                                    <input type="radio" name='itemDescriptionRadio' id='radioReviewId'/>
                                                    <label htmlFor='radioReviewId'>Review (3)</label>
                                                </div>                                            
                                            </div>
                                            <div className="switchTabs">
                                                <div className="description firstDiv">
                                                    <div className="paragraph">
                                                        <div>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus placeat, ex cupiditate natus veniam molestias fugiat id asperiores voluptas cum commodi minima temporibus beatae reiciendis quibusdam! Doloribus perferendis minus repellat sapiente dignissimos perspiciatis mollitia, nam quasi totam autem beatae repudiandae!
                                                            <ul>
                                                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi?</li>
                                                            </ul>
                                                        </div>
                                                        <hr />
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti nemo minima cumque maiores a architecto nostrum incidunt, aspernatur nesciunt repellendus deleniti. Eaque, veniam qui aspernatur possimus pariatur repellat velit nam labore cumque doloribus asperiores, at expedita esse, corporis quod?
                                                        </p>
                                                    </div>
                                                    <div className="paragraph">
                                                        <p className='heading'>Package & Delivery</p>
                                                        <hr />
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias fugit officia numquam dolorum vitae rerum illum eligendi recusandae ab reprehenderit amet repudiandae quod, quibusdam repellendus fuga aperiam magnam ipsum nulla non iure similique autem sequi! Veniam inventore exercitationem distinctio voluptates! Soluta aut placeat officia expedita cumque, molestias totam explicabo voluptate non quasi nulla nobis? Itaque error esse voluptatum consectetur.</p>
                                                    </div>
                                                    <div className="paragraph">
                                                        <p className='heading'> Suggest Use</p>

                                                        <div>
                                                            <ul>
                                                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi?</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <div className="paragraph">
                                                        <p className='heading'>Other Ingredients</p>

                                                        <div>
                                                            <ul>
                                                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi?</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <div className="paragraph">
                                                        <p className='heading' >Warnings</p>

                                                        <div>
                                                            <ul>
                                                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi?</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="description">
                                                    <div className="paragraph">
                                                        <div>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus placeat, ex cupiditate natus veniam molestias fugiat id asperiores voluptas cum commodi minima temporibus beatae reiciendis quibusdam! Doloribus perferendis minus repellat sapiente dignissimos perspiciatis mollitia, nam quasi totam autem beatae repudiandae!
                                                            <ul>
                                                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi?</li>
                                                            </ul>
                                                        </div>
                                                        <hr />
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti nemo minima cumque maiores a architecto nostrum incidunt, aspernatur nesciunt repellendus deleniti. Eaque, veniam qui aspernatur possimus pariatur repellat velit nam labore cumque doloribus asperiores, at expedita esse, corporis quod?
                                                        </p>
                                                    </div>
                                                    <div className="paragraph">
                                                        <p className='heading'>Package & Delivery</p>
                                                        <hr />
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias fugit officia numquam dolorum vitae rerum illum eligendi recusandae ab reprehenderit amet repudiandae quod, quibusdam repellendus fuga aperiam magnam ipsum nulla non iure similique autem sequi! Veniam inventore exercitationem distinctio voluptates! Soluta aut placeat officia expedita cumque, molestias totam explicabo voluptate non quasi nulla nobis? Itaque error esse voluptatum consectetur.</p>
                                                    </div>
                                                    <div className="paragraph">
                                                        <p className='heading'> Suggest Use</p>

                                                        <div>
                                                            <ul>
                                                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi?</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <div className="paragraph">
                                                        <p className='heading'>Other Ingredients</p>

                                                        <div>
                                                            <ul>
                                                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi?</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <div className="paragraph">
                                                        <p className='heading' >Warnings</p>

                                                        <div>
                                                            <ul>
                                                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                                                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi?</li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
