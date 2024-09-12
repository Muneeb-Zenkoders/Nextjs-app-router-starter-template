import React from 'react';
import Image from 'next/image';
import logo from '@/assets/Box.png';

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-white px-4 h-16 w-full border-2'>
      <div className='flex items-center'></div>
      <div>
        <Image
          src={logo}
          width={30}
          height={30}
          alt='Logo'
        />
      </div>
    </header>
  );
};

export default Header;
