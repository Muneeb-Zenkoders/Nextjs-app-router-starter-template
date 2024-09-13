import React from 'react';
import Image from 'next/image';
import triballogo from '@/assets/logo.png';
import dashboardLogo from '@/assets/dashboardLogo.png';
import scheduleLogo from '@/assets/scheduleLogo.png';
import ShiftSwapsLogo from '@/assets/ShiftSwapsLogo.png';
import TimeSheetLogo from '@/assets/TimeSheetLogo.png';
import StaffManagementLogo from '@/assets/StaffManagementLogo.png';
import SitesLogo from '@/assets/SitesLogo.png';

const Sidebar = () => {
  const dashboardPath = '/TribalHealth/Dashboard';
  const schedulePath = '/TribalHealth/Schedule';
  const shiftswapsPath = '/TribalHealth/ShiftSwaps';
  const timesheetPath = '/TribalHealth/TimeSheet';
  const staffmanagementPath = '/TribalHealth/StaffManagement';
  const sitesandlocationPath = '/TribalHealth/SitesandLocation';

  return (
    <aside className='flex h-[2193px] w-64 flex-col overflow-y-auto border-r bg-nav-background px-5 py-8'>
      <a
        href='#'
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
            <a
              className='flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-indigo-900 hover:text-white'
              href={dashboardPath}
            >
              <Image
                src={dashboardLogo}
                width={22}
                height={22}
                alt='Picture of the author'
              />
              <span className='mx-2 text-sm font-medium pl-2'>Dashboard</span>
            </a>
            <a
              className='flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-indigo-900 hover:text-white'
              href={schedulePath}
            >
              <Image
                src={scheduleLogo}
                width={22}
                height={22}
                alt='Picture of the author'
              />
              <span className='mx-2 text-sm font-medium pl-2'>Schedule</span>
            </a>
            <a
              className='flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-indigo-900 hover:text-white'
              href={shiftswapsPath}
            >
              <Image
                src={ShiftSwapsLogo}
                width={22}
                height={22}
                alt='Picture of the author'
              />
              <span className='mx-2 text-sm font-medium pl-2'>Shift Swaps</span>
            </a>
            <a
              className='flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-indigo-900 hover:text-white'
              href={timesheetPath}
            >
              <Image
                src={TimeSheetLogo}
                width={22}
                height={22}
                alt='Picture of the author'
              />
              <span className='mx-2 text-sm font-medium pl-2'>Time Sheet</span>
            </a>
            <a
              className='flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-indigo-900 hover:text-white'
              href={staffmanagementPath}
            >
              <Image
                src={StaffManagementLogo}
                width={22}
                height={22}
                alt='Picture of the author'
              />
              <span className='mx-2 text-sm font-medium pl-2'>
                Staff Management
              </span>
            </a>
            <a
              className='flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-indigo-900 hover:text-white'
              href={sitesandlocationPath}
            >
              <Image
                src={SitesLogo}
                width={22}
                height={22}
                alt='Picture of the author'
              />
              <span className='mx-2 text-sm font-medium pl-2'>
                Sites & Location
              </span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
