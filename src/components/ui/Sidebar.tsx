import Image from 'next/image';
import triballogo from '@/assets/logo.png';
import dashboardLogo from '@/assets/dashboardLogo.png';
import scheduleLogo from '@/assets/scheduleLogo.png';
import ShiftSwapsLogo from '@/assets/ShiftSwapsLogo.png';
import TimeSheetLogo from '@/assets/TimeSheetLogo.png';
import StaffManagementLogo from '@/assets/StaffManagementLogo.png';
import SitesLogo from '@/assets/SitesLogo.png';
import { useState, useEffect } from 'react';

const paths = [
  { name: 'Dashboard', URL: '/TribalHealth/Dashboard', logo: dashboardLogo },
  { name: 'Schedule', URL: '/TribalHealth/Schedule', logo: scheduleLogo },
  {
    name: 'Shift Swaps',
    URL: '/TribalHealth/ShiftSwaps',
    logo: ShiftSwapsLogo,
  },
  { name: 'Time Sheet', URL: '/TribalHealth/TimeSheet', logo: TimeSheetLogo },
  {
    name: 'Staff Management',
    URL: '/TribalHealth/StaffManagement',
    logo: StaffManagementLogo,
  },
  {
    name: 'Sites & Location',
    URL: '/TribalHealth/SitesandLocation',
    logo: SitesLogo,
  },
];

const Sidebar = () => {
  return (
    <aside className='flex h-[2193px] w-64 flex-col overflow-y-auto border-r bg-nav-background px-5 py-8'>
      <a
        href='/TribalHealth'
        className='py-8'
      >
        <Image
          src={triballogo}
          width={500}
          height={500}
          alt='Picture of the author'
        />
      </a>
      <div className='mt-6 flex flex-1 flex-col justify-between'>
        <nav className='-mx-3 space-y-6 '>
          <div className='space-y-3'>
            {paths.map((path, index) => (
              <a
                key={index}
                className='flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-indigo-900 hover:text-white'
                href={path.URL}
              >
                <Image
                  src={path.logo}
                  width={22}
                  height={22}
                  alt='Picture of the author'
                />
                <span className='mx-2 text-sm font-medium pl-2'>
                  {path.name}
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
