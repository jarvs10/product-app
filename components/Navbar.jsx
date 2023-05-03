import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import Dropdown from './Dropdown';

const Navbar = () => {

  const pathname = usePathname();

  return (
    <nav className='py-1 bg-lime-600 flex justify-between items-center px-8 text-center'>
      <Link href={'/'}>
        <Image className='w-20' src={'/img/LOGO-JUMBO-2021.png'} width={140} height={100} alt="logo" />
      </Link>

      <Dropdown />

      <Link className={pathname === '/register' ? 'text-white font-bold text-xl hover:text-black underline w-40' : 'text-white font-bold text-lg hover:bg-green-700 py-2 rounded-md w-40 text-center'} href={'/register'}>Registrate</Link>
      <Link className={pathname === '/login' ? 'text-white font-bold text-xl hover:text-black underline w-40' : 'text-white font-bold text-lg hover:bg-green-700 py-2 rounded-md w-40 text-center'} href={'/login'}>Login</Link>
      <Link className={pathname === '/cart' ? 'text-white font-bold text-xl hover:text-black underline' : 'text-white font-bold text-lg hover:text-black hover:bg-green-700 py-2 rounded-md'} href={'/'}> <AiOutlineShoppingCart className='text-3xl' /></Link>
    </nav>


  )
}

export default Navbar