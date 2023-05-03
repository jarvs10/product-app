import Link from 'next/link'
import React, { useState } from 'react'

const Dropdown = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative w-40 hover:bg-green-700 py-2 rounded-md'>
      <button onClick={() => setIsOpen(prev => !prev)} className='text-white font-bold w-full items-center justify-between active:text-black text-xl'>Categories
      </button>

      {
        isOpen && <nav className='flex flex-col items-center w-full bg-green-700 py-6 absolute text-white font-bold rounded-md opacity-90'>
          <Link className='hover:text-black py-1' href={'/products'}>Lacteos</Link>
          <Link className='hover:text-black py-1' href={'/'}>Refrigerados</Link>
          <Link className='hover:text-black py-1' href={'/'}>Trigo</Link> 
        </nav>
      }
    </div>
  )
}

export default Dropdown