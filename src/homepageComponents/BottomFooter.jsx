import React from 'react'

function BottomFooter() {
    return (
        <div className='bottomfootermain'>

            <div className="bottomfooterMail">

                <div className="footermailleft">
                    <h4>Follow us on Instagram @Furniture</h4>
                    <div className="mailleftcontainer">
                        <div className='mailleftIMG'
                            style={{ backgroundImage: 'url("https://fairtradefurniture.co.uk/wordpress2/wp-content/uploads/2021/11/most-popular-conservatory-furniture-500x500.jpeg")' }}>
                        </div>

                        <div className='mailleftIMG'
                        style={{ backgroundImage: 'url("http://sc04.alicdn.com/kf/H571ea1ffd8bb489c8524a5d99394576f1.jpg")' }}>
                        </div>
                    </div>
                </div>

                <div className="footermailright">
                    <h1>Subscribe</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <input className='footerInput' type="email" placeholder='Your E-mail'/>
                    <button className='footerBTN'>Subscribe</button>
                </div>

            </div>
            
        </div>
    )
}

export default BottomFooter