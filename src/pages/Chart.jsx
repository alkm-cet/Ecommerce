import React, { useContext, } from 'react'
import { DataContext } from '../context/DataContext'
import { Link } from 'react-router-dom'

function Chart() {

    const { products, setProducts, buyed, setBuyed } = useContext(DataContext)

    const removeItemfunc = (id) => {
        const removedItem = buyed.find((item) => item.id === id)
        if (removedItem) {
            removedItem.amount -= 1
            setBuyed([removedItem, ...buyed.filter(item => item.id !== id)])
            if (removedItem.amount == 0) {
                setBuyed(buyed.filter((item) => item.id !== id))
            }
        }
    }

    let totalprice = 0;
    let totaldiscount = 0;

    for (let i = 0; i < buyed.length; i++) {
        totalprice += buyed[i].price * buyed[i].amount
        totaldiscount += ((buyed[i].price * buyed[i].amount) * buyed[i].discount) / 100
    }

    const pay = (e) => {
        e.target.parentElement.style.display = 'none';
        e.target.parentElement.parentElement.style.backgroundColor = '#32ff7e'
        e.target.parentElement.parentElement.innerText = 'Your payment has been completed !'
    }

    return (
        <div className='chartPageMainContainer'>
            {
                buyed.length == 0
                    ? <div style={{ background: 'transparent', width: "70%", fontSize: 40 }}>No item in your basket <br /> <Link to='/Ecommerce/AllProducts'><button className='payBTN' style={{ width: 150, height: 60, background: '#fff200' }}>Shop Now</button></Link></div>
                    : <div className='cartpagebuyeditemcontainer'>
                        {/* <div className="chartpagetitles">
                            <p>Discount Rate</p>
                            <p>Product Info</p>
                            <p>Price</p>
                            <p>Amount</p>
                            <p>Total Discount</p>
                        </div> */}
                        {
                            buyed.map((item) => {
                                return (
                                    <div key={item.id} className="buyeditemmini">
                                        <div className="buyeditemimgmini" style={{ backgroundImage: `url(${item.img})` }}></div>
                                        <div className="buyeditemminidiscount" >
                                            {
                                                item.discount
                                                    ? <div className='buyeditemdiscountcircle'>%{item.discount}</div>
                                                    : <div style={{ textAlign: 'center', background: 'transparent' }}>No Discount</div>
                                            }
                                        </div>
                                        <h5>{item.explanation}</h5>
                                        <h5>${item.price}</h5>
                                        <h5 style={{ fontSize: 20, color: 'orange' }}>{item.amount}</h5>
                                        <h5>Total Discount: ${((item.price * item.amount) * item.discount) / 100}</h5>
                                        {
                                            item.amount !== 1
                                                ? <button className='buyeditemminiBTN' onClick={() => removeItemfunc(item.id)}>Decrease</button>
                                                : <button className='buyeditemminiBTN' onClick={() => removeItemfunc(item.id)}>Remove</button>
                                        }

                                    </div>
                                )
                            })
                        }
                    </div>

            }



            {
                totalprice !== 0

                    ? <div className="charttotalpricecontainer">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            <p>Total Price: <i style={{ textDecoration: 'line-through' }}>${totalprice}</i>  </p>
                            <p>Total Discount: ${totaldiscount}</p>
                            <b style={{ fontSize: 20 }}>Total Payment: {(totalprice - totaldiscount).toFixed(2)}</b> <br />
                            <button onClick={pay} className='payBTN'>PAY</button>
                        </div>
                    </div>
                    : null
            }

        </div>
    )
}

export default Chart
