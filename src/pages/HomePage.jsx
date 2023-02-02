import React from 'react'
import ProductBuyCard from '../homepageComponents/ProductBuyCard'
import CollectionsAndBlog from '../homepageComponents/CollectionsAndBlog'
import BottomFooter from '../homepageComponents/BottomFooter'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className='homepagecontainer'>
            {/*----------------------------TOP--------------  */}
            <div className="homepagetop">
                <div className="homepagetopleft">
                    <h1 >Awesome Design Best Furniture<br /> For Your Home</h1>
                    <small>Browse, Choose & Order, Very Simple</small>
                    <Link to='/AllProducts'><button className='shopnowbtn'>Shop Now</button></Link>
                    <div className="spansdiv">
                        <span ><b style={{ color: 'black' }}>1000+</b> <br />Furnitures & <br /> Equipments</span>
                        <span><b style={{ color: 'black' }}>130+</b>  <br />Fresh Interior & <br /> Design</span>
                        <span><b style={{ color: 'black' }}>640+ </b> <br />Happy <br />CLients</span>
                    </div>
                </div>

                <div className="homepagetopright">


                    <figure>
                        <img src="https://static.designboom.com/wp-content/uploads/2021/01/laskasas-2021-collection-luxury-bespoke-furniture-designboom600.jpg" alt="" />
                        <img src="https://cdn.shopify.com/s/files/1/0635/7768/6230/files/Mobile_Banner_2.jpg?v=1653576585" alt="" />
                        <img src="https://www.moderndigsfurniture.com/catalog_images/28134-reade-3-si.jpg" alt="" />
                        <img src="https://static.designboom.com/wp-content/uploads/2021/09/skram-architonic-designboom-600-1.jpg" alt="" />
                        <img src="https://static.designboom.com/wp-content/uploads/2021/01/laskasas-2021-collection-luxury-bespoke-furniture-designboom600.jpg" alt="" />
                    </figure>


                </div>

            </div>
            <div className="topinfocard">
                <div className="midcardinfotexts">
                    <h3>Fast Delivery</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="midcardinfotexts">
                    <h3>Free Returns</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="midcardinfotexts">
                    <h3>24/7 Support</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            {/*----------------------------MİD--------------  */}
            <div className="homepagemid">
                <h1 className="homepagemidtitle">Top Picked For Your</h1>
                <ProductBuyCard />
                <Link to='/AllProducts'><button className='exploremoreBTN'>Explore All Items</button></Link>
                <CollectionsAndBlog />
            </div>
            <BottomFooter />
        </div>
    )
}

export default HomePage