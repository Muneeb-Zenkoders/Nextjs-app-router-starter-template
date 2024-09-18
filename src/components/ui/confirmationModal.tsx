import React from 'react';

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  message,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg shadow-lg p-8 w-[32rem] text-center border-4 border-blue-300'>
        <div className='mb-4'>
          <i className='fas fa-trash-alt text-red-500 text-6xl'></i>
        </div>
        <div className='mb-6'>
          <p className='text-xl font-semibold'>{message}</p>
        </div>
        <div className='flex justify-between'>
          <button
            onClick={onClose}
            className='text-gray-500 font-medium'
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className='bg-red-500 text-white font-medium py-2 px-6 rounded'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
