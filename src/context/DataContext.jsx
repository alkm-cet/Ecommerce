import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const InitialProducts = [
    {
        id: 1,
        img: "https://tononitalia.com/app/uploads/2022/02/moon-cover.jpg",
        explanation: "Simple Minimal Chair",
        price: 200,
        discount: 0,
        isdiscountavailable: "false",
        type: "chair",
        amount: 0
    },
    {
        id: 2,
        img: "https://thumbs.dreamstime.com/b/vintage-furniture-flat-stylish-vintage-furniture-spacious-flat-interior-beige-sofa-chairs-posters-wall-112280434.jpg",
        explanation: "Wooden Decorations",
        price: 300,
        discount: 15,
        isdiscountavailable: "true",
        type: "chair",
        amount: 0
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        explanation: "Living and Bedroom",
        price: 400,
        discount: 0,
        isdiscountavailable: "false",
        type: "chair",
        amount: 0
    },
    {
        id: 4,
        img: "https://i.pinimg.com/originals/4c/d9/f2/4cd9f286a1911484c7f4ee95751adea8.jpg",
        explanation: "Livingroom Sofa",
        price: 500,
        discount: 25,
        isdiscountavailable: "true",
        type: "sofa",
        amount: 0
    },
    {
        id: 5,
        img: "https://i.ebayimg.com/images/g/F5UAAOSwORJjt8eG/s-l500.jpg",
        explanation: "Kitchen Chair",
        price: 1000,
        discount: 0,
        isdiscountavailable: "false",
        type: "chair",
        amount: 0
    },
    {
        id: 6,
        img: "https://cdn.ikea.com.tr/urunler/500_500/PE880309.jpg",
        explanation: "Livingroom Sofa",
        price: 975,
        discount: 0,
        isdiscountavailable: "false",
        type: "sofa",
        amount: 0
    },
    {
        id: 7,
        img: "https://m.media-amazon.com/images/I/51yoL881YKL._AC_SY780_.jpg",
        explanation: "Livingroom Lamb",
        price: 145,
        discount: 5,
        isdiscountavailable: "true",
        type: "lamb",
        amount: 0
    },
    {
        id: 8,
        img: "https://iis-akakce.akamaized.net/p.z?%2F%2Fimg%2Epttavm%2Ecom%2Fpimages%2F592%2F109%2F089%2F6362b2d3b7190%2Ejpg%3Fv%3D201910111528",
        explanation: "Livingroom Lamb",
        price: 125,
        discount: 0,
        isdiscountavailable: "false",
        type: "lamb",
        amount: 0
    },
    {
        id: 9,
        img: "https://www.yasamspor.com/admins/fladon/litero/145610-sjy-masa-lambas-lamba-led-e27-yaratc-modern-bakr-bez-altn-kus-yatak-odas-oturma-odas-calsma-odas.jpg",
        explanation: "Livingroom Lamb",
        price: 75,
        discount: 3,
        isdiscountavailable: "true",
        type: "lamb",
        amount: 0
    },
    {
        id: 10,
        img: "https://hcodems.org/tmpl/haniola0b/36942-jonathan-y-jyl3046b-hartley-29-seramik-suetun-led-lamba-cagdas-gecis-icin-yatak-odas-oturma-odas-ofis-ueniversite-yurt-sehpa-kitaplk.jpg",
        explanation: "Livingroom Lamb",
        price: 145,
        discount: 0,
        isdiscountavailable: "false",
        type: "lamb",
        amount: 0
    },
    {
        id: 11,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQwNxqsRV3HVuVkditKm0RQzb7yg_oylMgDg&usqp=CAU",
        explanation: "Livingroom Chair",
        price: 399,
        discount: 7,
        isdiscountavailable: "true",
        type: "lamb",
        amount: 0
    },
    {
        id: 12,
        img: "https://m.media-amazon.com/images/I/513ydRXgAPL._AC_.jpg",
        explanation: "Livingroom Chair",
        price: 759,
        discount: 12,
        isdiscountavailable: "true",
        type: "chair",
        amount: 0
    },
    {
        id: 13,
        img: "https://i.ebayimg.com/images/g/I-4AAOSwjChh3rCY/s-l500.jpg",
        explanation: "Livingroom Chair",
        price: 759,
        discount: 18,
        isdiscountavailable: "true",
        type: "chair",
        amount: 0
    },
    {
        id: 14,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcSiMKuo25dCwo12gAub_WydQuwS2mLy1cyA&usqp=CAU",
        explanation: "Livingroom Chair",
        price: 359,
        discount: 0,
        isdiscountavailable: "false",
        type: "chair",
        amount: 0
    },
    {
        id: 15,
        img: "https://m.media-amazon.com/images/I/516I6pdokGL._AC_SY780_.jpg",
        explanation: "Livingroom Carpet",
        price: 959,
        discount: 5,
        isdiscountavailable: "true",
        type: "carpet",
        amount: 0
    },
    {
        id: 16,
        img: "https://i.pinimg.com/564x/c7/7c/ab/c77cab35b030792c91b758ad90cadd66.jpg",
        explanation: "Livingroom Carpet",
        price: 859,
        discount: 5,
        isdiscountavailable: "true",
        type: "carpet",
        amount: 0
    },
    {
        id: 17,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJosu8a1_1UgD2PfxzQV5Bozahe0H0EfX90w&usqp=CAU",
        explanation: "Livingroom Carpet",
        price: 545,
        discount: 0,
        isdiscountavailable: "false",
        type: "carpet",
        amount: 0
    },
    {
        id: 18,
        img: "https://m.media-amazon.com/images/I/51N4UEr9ZhL._AC_SY580_.jpg",
        explanation: "Livingroom Sofa",
        price: 1045,
        discount: 0,
        isdiscountavailable: "false",
        type: "sofa",
        amount: 0
    },
    {
        id: 19,
        img: "https://m.media-amazon.com/images/I/41-JEA-dMpL._AC_.jpg",
        explanation: "Livingroom Sofa",
        price: 870,
        discount: 5,
        isdiscountavailable: "true",
        type: "sofa",
        amount: 0
    },
    {
        id: 20,
        img: "https://i.etsystatic.com/24138131/r/il/b24572/4136308516/il_500x500.4136308516_e0ry.jpg",
        explanation: "Livingroom Carpet",
        price: 870,
        discount: 0,
        isdiscountavailable: "false",
        type: "carpet",
        amount: 0
    }
]

function DataContextProvider({ children }) {

    

    const [products, setProducts] = useState(InitialProducts)
    const [buyed, setBuyed] = useState([])

    const resetProducts = () => {
        setProducts(InitialProducts);
    }

    const filterProducts = (e) => {
        if (e == "all") {
            resetProducts();
        } else {
            let filteredArray = InitialProducts.filter((item) => item.type === e || item.isdiscountavailable === e)
            setProducts(filteredArray);
        }
    }

    return (
        <DataContext.Provider
            value={{
                products, setProducts,
                buyed, setBuyed,
                resetProducts,
                filterProducts
            }}>

            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider