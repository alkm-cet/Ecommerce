import React from 'react'

function BottomFooter() {
    return (
        <div className='bottomfootermain'>

            <div className="bottomfooterMail">

                <div className="footermailleft">
                    <h4>Follow us on Instagram @Furniture</h4>
                    <div className="mailleftcontainer">
                        <div className='mailleftIMG'
                            style={{ backgroundImage: 'url("https://ae01.alicdn.com/kf/Hec1ce90f70bd47f1b9459609fd34ccbfs/Luz-italiana-luxo-sof-de-couro-villa-grande-fam-lia-sala-estar-designer-p-s-moderna.jpg_Q90.jpg_.webp")' }}>
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