import Image from 'next/image';
import React from 'react'

const Lacteos = ({item}) => {

  const { id, name, price, description, quantity, img, image, updatedAt } = item;

  return (
    <div className='border border-slate-300 shadow-md rounded-md py-10 px-4 text-center'>
      <h3 className='text-2xl font-bold mb-2'>{name}</h3>
      <Image className='mx-auto mb-2' src={image.url} alt="item" width={100} height={100} />
      <p className='mb-1'>${price}</p>
      <p className='font-bold mb-1'>{`${description[0].children[0].text}`}</p> 
      <p>{quantity}</p>
    </div>
  )
}

export default Lacteos