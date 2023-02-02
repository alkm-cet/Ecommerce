import React from 'react'
import { Link } from 'react-router-dom';

function CollectionsAndBlog() {
    return (
        <div className='CollectionsAndBlogDiv'>

            <div className="collectionsdiv">

                <div className="collection">
                    <div className="collectionleft">
                        <h4>30% Off</h4>
                        <h2>Chair Collection</h2>
                        <Link to='/AllProducts'><button className='collectionshopBTN'>Shop Now</button></Link>
                    </div>
                    <div className="collectionright"
                        style={{ backgroundImage: 'url("https://a.1stdibscdn.com/f588-lounge-chair-by-geoffrey-harcourt-for-artifort-for-sale/f_48001/f_315378521669886270480/f_31537852_1669886271207_bg_processed.jpg")' }}></div>
                </div>

                <div className="collection">
                    <div className="collectionleft">
                        <h4>20% Off</h4>
                        <h2>Sofa Collection</h2>
                        <Link to='/AllProducts'><button className='collectionshopBTN'>Shop Now</button></Link>
                    </div>
                    <div className="collectionright"
                        style={{ backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0096/4594/9013/products/Designer-Sofa-Set-in-Fabric-L-Shape_1.png?v=1616070419")' }}></div>
                </div>
            </div>

            <h1>Latest Blog</h1>

            <div className="blogdivmain">

                <div className="blogsdiv">

                    <div className="blogdivleft"
                        style={{ backgroundImage: 'url("https://www.loginbrands.com/images/Gallery/10883-Lazzoni-Modern-Turkish-Furniture-29.jpg")' }}></div>

                    <div className="blogdivright">
                        <h2>Summer Collection</h2>
                        <h4>19/02/2023</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <button className='blogreadmoreBTN'>Read More</button>
                    </div>

                </div>

                <div className="blogsdiv">

                    <div className="blogdivleft"
                        style={{ backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0568/6362/1297/products/met-corner-with-integrated-table-10@3x.progressive.jpg")' }}></div>

                    <div className="blogdivright">
                        <h2>Summer Collection</h2>
                        <h4>19/02/2023</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <button className='blogreadmoreBTN'>Read More</button>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default CollectionsAndBlog