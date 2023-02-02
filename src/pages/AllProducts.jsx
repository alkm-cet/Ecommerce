import React from 'react';
import FilterBarLeft from '../allproductComponents/FilterBarLeft';
import AllProductsMidContainer from '../allproductComponents/AllProductsMidContainer';

function AllProducts() {
  return (
    <div className='AllProductsMainContainer'>
      <FilterBarLeft/>
      <AllProductsMidContainer/>
    </div>
  )
}

export default AllProducts