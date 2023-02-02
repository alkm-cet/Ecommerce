import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

function ProductBuyCard() {

    const { products, setProducts, buyed, setBuyed } = useContext(DataContext)

    const buyItemfunc = (id) => {
        const buyedItem = products.find((item) => item.id === id)
        if (buyedItem) {
            buyedItem.amount += 1
            setBuyed([...buyed.filter(item => item.id !== id), buyedItem])
        } else {
            setBuyed([...buyed, buyedItem]);
        }
    }

    return (
        <div className='productbuycardMain'>
            {
                products.slice(0, 4).map(item => {
                    return (
                        <div key={item.id} className='productbuycardcontainer'>
                            <div className='productimgg' style={{ backgroundImage: `url(${item.img})` }}>
                                {
                                    item.discount
                                        ? <div className="discountdiv">%{item.discount}</div>
                                        : <div className="discountdiv" style={{ visibility: 'hidden' }}></div>
                                }
                                <button onClick={() => buyItemfunc(item.id)} className='addtochartbtn'>Add to Cart</button>
                            </div>
                            <h3 style={{ backgroundColor: '#FFFFFF', fontWeight: 200 }}>{item.explanation}</h3>
                            <h5 style={{ background: 'transparent' }}>{item.type}</h5>
                            <h2 style={{ backgroundColor: '#FFFFFF' }}>${item.price}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductBuyCard