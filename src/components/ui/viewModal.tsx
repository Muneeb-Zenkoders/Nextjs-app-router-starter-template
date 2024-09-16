import React from 'react';
import {
  FaTimes,
  FaHospital,
  FaCube,
  FaCalendarAlt,
  FaClock,
  FaTrashAlt,
  FaEdit,
} from 'react-icons/fa';

const ViewModal = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-white'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-[600px]'>
        <div className='flex justify-between items-center mb-4 border-b border-gray-200 pb-2'>
          <h2 className='text-lg font-semibold'>View Shift</h2>
          <button className='text-gray-500 cursor-pointer'>
            <FaTimes />
          </button>
        </div>
        <div className='space-y-4'>
          <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
            <div className='flex items-center space-x-2'>
              <FaHospital className='text-blue-500' />
              <span>Sites</span>
            </div>
            <span className='text-gray-700'>Pine Ridge Service Unit</span>
          </div>
          <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
            <div className='flex items-center space-x-2'>
              <FaCube className='text-blue-500' />
              <span>Job</span>
            </div>
            <span className='text-gray-700'>Emergency Medicine</span>
          </div>
          <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
            <div className='flex items-center space-x-2'>
              <FaCalendarAlt className='text-blue-500' />
              <span>Date</span>
            </div>
            <span className='text-gray-700'>MON 24/05/2024</span>
          </div>
          <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
            <div className='flex items-center space-x-2'>
              <FaClock className='text-blue-500' />
              <span>Scheduled Start</span>
            </div>
            <span className='text-gray-700'>07:00</span>
          </div>
          <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
            <div className='flex items-center space-x-2'>
              <FaClock className='text-blue-500' />
              <span>Scheduled End</span>
            </div>
            <span className='text-gray-700'>07:00</span>
          </div>
          <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
            <div className='flex items-center space-x-2'>
              <FaClock className='text-blue-500' />
              <span>Actual Start</span>
            </div>
            <span className='text-gray-700'>-</span>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
              <FaClock className='text-blue-500' />
              <span>Actual End</span>
            </div>
            <span className='text-gray-700'>-</span>
          </div>
        </div>
        <div className='flex items-center mt-6 border-t border-gray-200 pt-2'>
          <img
            alt='Profile picture of Devon Lane'
            className='w-10 h-10 rounded-full'
            height='40'
            src='https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-ncdCr8XHv0cIYTx2gV8w5LUE.png?st=2024-09-16T09%3A09%3A14Z&amp;se=2024-09-16T11%3A09%3A14Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-16T00%3A41%3A51Z&amp;ske=2024-09-17T00%3A41%3A51Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=8lR5MAwIvOqvf5YIphyJR%2BFGHzP5O33Y3AHYZdQSJ1A%3D'
            width='40'
          />
          <span className='ml-4 text-gray-700'>Devon Lane</span>
        </div>
        <div className='flex justify-between mt-6 border-t border-gray-200 pt-2'>
          <button className='flex items-center space-x-2 text-red-500 border rounded w-[270px] justify-center p-3'>
            <FaTrashAlt />
            <span className='text-center flex-1'>Delete</span>
          </button>
          <button className='flex items-center space-x-2 text-blue-500 border rounded w-[270px] justify-center p-3'>
            <FaEdit />
            <span className='text-center flex-1'>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
