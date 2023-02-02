import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'

function FilterBarLeft() {

    const { filterProducts, buyed, setBuyed, products } = useContext(DataContext)

    const [category, setCategory] = useState();

    const filterfunc = (e) => {
        filterProducts(e.target.value)
        setCategory((e.target.value).toUpperCase())
    }

    let total = 0;

    const showtotal = () => {
        products.forEach(element => {
            total += element.amount
        });
    }

    showtotal();

    return (
        <div className='filteredbarleft'>
            <h4 style={{ background: 'transparent', }}>Category: {category}</h4>
            <button onClick={filterfunc} value="all" className='filterBTN'>All</button>
            <button onClick={filterfunc} value="chair" className='filterBTN'>Chairs</button>
            <button onClick={filterfunc} value="sofa" className='filterBTN'>Sofa</button>
            <button onClick={filterfunc} value="lamb" className='filterBTN'>Lamb</button>
            <button onClick={filterfunc} value="carpet" className='filterBTN'>Carpet</button>
            <button onClick={filterfunc} value="true" className='filterBTN'>On Sale(%)</button>

            <div className='filteredshowamount'>
                Total Basket Amount: {total}
            </div>

        </div>
    )
}

export default FilterBarLeft

// const filterfunc = (e) => {
// setProducts(products);
// setProducts(products.filter((item) => item.type === e.target.value))
// }