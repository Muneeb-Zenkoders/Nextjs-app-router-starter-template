import React from 'react';
import {
  FaTimes,
  FaHospital,
  FaCube,
  FaCalendarAlt,
  FaClock,
  FaTrashAlt,
} from 'react-icons/fa';
import { IEvent } from '@/types/Interfaces/userData';

const ViewModal = ({
  isOpen,
  onClose,
  event,
  onDelete,
}: {
  isOpen: boolean;
  onClose: () => void;
  event: IEvent | null;
  onDelete: () => void;
}) => {
  if (!isOpen || !event) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div
        className='bg-white rounded-lg p-6 relative'
        style={{ width: '600px' }}
      >
        <button
          onClick={onClose}
          className='absolute top-3 right-3 text-xl bg-transparent border-none cursor-pointer'
        >
          <FaTimes />
        </button>
        <h2 className='text-xl font-semibold mb-4'>View Shift</h2>
        <div className='space-y-4'>
          <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
            <div className='flex items-center space-x-2'>
              <FaHospital className='text-blue-500' />
              <span>Sites</span>
            </div>
            <span className='text-gray-700'>{event.site || 'N/A'}</span>
          </div>
          <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
            <div className='flex items-center space-x-2'>
              <FaCube className='text-blue-500' />
              <span>Job</span>
            </div>
            <span className='text-gray-700'>{event.title || 'N/A'}</span>
          </div>
          <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
            <div className='flex items-center space-x-2'>
              <FaCalendarAlt className='text-blue-500' />
              <span>Date</span>
            </div>
            <span className='text-gray-700'>
              {event.start.toLocaleDateString()}
            </span>
          </div>
          <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
            <div className='flex items-center space-x-2'>
              <FaClock className='text-blue-500' />
              <span>Scheduled Start</span>
            </div>
            <span className='text-gray-700'>
              {event.start.toLocaleTimeString()}
            </span>
          </div>
          <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
            <div className='flex items-center space-x-2'>
              <FaClock className='text-blue-500' />
              <span>Scheduled End</span>
            </div>
            <span className='text-gray-700'>
              {event.end.toLocaleTimeString()}
            </span>
          </div>
          <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
            <div className='flex items-center space-x-2'>
              <FaClock className='text-blue-500' />
              <span>Actual Start</span>
            </div>
            <span className='text-gray-700'>{event.actualStart || 'N/A'}</span>
          </div>
          <div className='flex justify-between items-center border-b border-gray-200 pb-2'>
            <div className='flex items-center space-x-2'>
              <FaClock className='text-blue-500' />
              <span>Actual End</span>
            </div>
            <span className='text-gray-700'>{event.actualEnd || 'N/A'}</span>
          </div>
          <div className='flex items-center border-b border-gray-200 pb-2'>
            <img
              alt='Profile'
              className='w-10 h-10 rounded-full'
              src={event.profilePicture || 'https://via.placeholder.com/40'}
            />
            <span className='ml-4 text-gray-700'>
              {event.employeeName || 'Employee Name'}
            </span>
          </div>
          <div className='flex justify-end'>
            <button
              onClick={onDelete}
              className='bg-red-500 text-white py-2 px-4 rounded flex items-center'
            >
              <FaTrashAlt className='inline mr-2' />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
