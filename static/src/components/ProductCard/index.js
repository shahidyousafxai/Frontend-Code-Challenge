import React from 'react';
import Images from '../../assets';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative border p-2 rounded-lg bg-gray-100 shadow-md">
      <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
        <div className='w-full h-[250px]'>
          <img src={Images[product?.img]} alt="" className="object-cover object-center" />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer flex items-end p-4 opacity-0 group-hover:opacity-100">
          <div className="w-full rounded-md cursor-pointer bg-gray-200 bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter whitespace-nowrap">
            Checkout Product
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
        <h3>
          <div>
            <span aria-hidden="true" className="absolute inset-0" />
            {product?.name || "-"}
          </div>
        </h3>
        <p>{product?.price || "-"}</p>
      </div>
    </div>
  )
}

export default ProductCard