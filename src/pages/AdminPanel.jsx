import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/DataContext'

function AdminPanel() {
    const { products, setProducts, buyed, setBuyed } = useContext(DataContext)

    const [id, setId] = useState("");
    const [img, setImg] = useState("");
    const [explanation, setExplanation] = useState("");
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [type, setType] = useState("");
    const [isdicavailable, setIsdicavailable] = useState("false");
    const [amount, setAmount] = useState(0)

    const setIdfunc = (e) => {
        setId(parseInt(e.target.value));
    }

    const setImgfunc = (e) => {
        setImg(e.target.value);
    }

    const setexplanationfunc = (e) => {
        setExplanation(e.target.value);
    }

    const setpricefunc = (e) => {
        setPrice(parseInt(e.target.value));
    }

    const setdiscountfunc = (e) => {
        setDiscount(parseInt(e.target.value));
        if (discount !== 0) {
            setIsdicavailable("true")
        }
    }

    const settypefunc = (e) => {
        setType(e.target.value);
    }

    const addnewitem = (e) => {
        if (id == "" || img == "" || explanation == "" || price == 0 || discount == 0 || type == "") {
            e.target.style.backgroundColor = "crimson";
            e.target.innerText = "All Blanks Must Be Filled"
        } else {
            e.target.parentElement.style.backgroundColor = "#32ff7e";
            e.target.previousSibling.style.visibility = "hidden";
            e.target.previousSibling.previousSibling.style.display = "block";
            e.target.style.display = "none";
            let newItemObject = { id: id, img: img, explanation: explanation, price: price, discount: discount, isdiscountavailable: isdicavailable, type: type, amount:amount }
            setProducts([newItemObject, ...products]);
        }

    }

    return (
        <div className='adminpanelMainContainer'>
            <h1 className='itemaddedtitle'>Your item has been successfully added! </h1>
            <div className="adminpanelformdiv">
                <h1 style={{ background: 'transparent', color: 'white' }}>ADD NEW ITEM</h1>
                <h3 className='apminpaneltitles'>Item ID <br /> ( Item id must be 1 higher than: {products.length} )</h3>
                <input onChange={setIdfunc} className='itempanelinputs' type="number" placeholder="id" />
                <h3 className='apminpaneltitles'>Item IMG URL</h3>
                <input onChange={setImgfunc} className='itempanelinputs' type="text" placeholder='500x500 recomended' />
                <h3 className='apminpaneltitles'>Item EXPLANATION</h3>
                <input onChange={setexplanationfunc} className='itempanelinputs' type="text" placeholder='Explanation' />
                <h3 className='apminpaneltitles'>Item PRICE</h3>
                <input onChange={setpricefunc} className='itempanelinputs' type="number" placeholder='Price' />
                <h3 className='apminpaneltitles'>Item DISCOUNT RATE</h3>
                <input onChange={setdiscountfunc} className='itempanelinputs' type="number" placeholder='Discount' />
                <h3 className='apminpaneltitles'>Item TYPE</h3>
                <input onChange={settypefunc} className='itempanelinputs' type="text" placeholder='Type' />
            </div>
            <button onClick={addnewitem} className='addnewitemBTN'>ADD NEW ITEM</button>
        </div >
    )
}

export default AdminPanel

// id: 17,
// img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJosu8a1_1UgD2PfxzQV5Bozahe0H0EfX90w&usqp=CAU",
// explanation: "Livingroom Carpet",
// price: 545,
// discount: 0,
// isdiscountavailable:"no",
// type: "carpet"




{/* <h1>ADD NEW ITEM</h1>
<h3>Item ID</h3>
<input type="text" placeholder='Id'/>
<h3>Item IMG</h3>
<input type="text" placeholder='Img'/>
<h3>Item EXPLANATION</h3>
<input type="text" placeholder='Explanation'/>
<h3>Item PRICE</h3>
<input type="text" placeholder='Price'/>
<h3>Item DISCOUNT RATE</h3>
<input type="text" placeholder='Discount'/>
<h3>Item TYPE</h3>
<input type="text" placeholder='Type'/>
<h3>Is Discount Available ?</h3>
<input type="checkbox" placeholder='Discount'/> */}