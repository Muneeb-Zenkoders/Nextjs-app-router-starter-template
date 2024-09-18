'use client';

import React from 'react';
import { Formik, Field, Form, ErrorMessage, useFormikContext } from 'formik';
import { ModalProps } from '@/types/Interfaces/userData';
import { validationSchema } from '@/schema/login.schema';
import { StateProps } from '@/types/Interfaces/userData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Modal = ({
  isOpen,
  onClose,
  userData,
  addEvent, // Add addEvent to props
}: ModalProps & { userData: StateProps; addEvent: (event: any) => void }) => {
  if (!isOpen) return null;

  // Find the selected staff member's avatar URL and name from userData
  const selectedStaff = (staffMemberName: string) => {
    const staff = userData.results.find(
      user => `${user.name.first} ${user.name.last}` === staffMemberName,
    );
    return staff || { picture: { large: '' }, name: { first: '', last: '' } };
  };

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
          &times;
        </button>
        <h2 className='text-xl font-semibold mb-4'>New Shift Form</h2>
        <Formik
          initialValues={{
            staffMember: '',
            date: '',
            start: '',
            end: '',
            site: '',
            job: '',
          }}
          validationSchema={validationSchema}
          onSubmit={values => {
            // Convert form values to event format
            const newEvent = {
              title: `${values.job} - ${values.staffMember}`,
              start: new Date(values.date + 'T' + values.start),
              end: new Date(values.date + 'T' + values.end),
              site: values.site,
              employeeName: values.staffMember,
              profilePicture: selectedStaff(values.staffMember).picture.large,
            };

            addEvent(newEvent); // Add the event to the calendar
            onClose(); // Close the modal on successful submission
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <div className='mb-4'>
                <label
                  htmlFor='staffMember'
                  className='block text-sm font-medium mb-1'
                >
                  Staff Member:
                </label>
                <Field
                  as='select'
                  id='staffMember'
                  name='staffMember'
                  className='w-full px-3 py-2 border border-gray-300 rounded'
                >
                  <option
                    value=''
                    label='Select a staff member'
                  />
                  {userData.results.map((user, index) => (
                    <option
                      key={index}
                      value={user.name.first + ' ' + user.name.last}
                    >
                      {user.name.first} {user.name.last}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name='staffMember'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
                {/* Display avatar of selected staff member */}
                {values.staffMember && (
                  <div className='mt-4 flex items-center'>
                    <Avatar className='mr-3'>
                      <AvatarImage
                        src={selectedStaff(values.staffMember).picture.large}
                      />
                      <AvatarFallback>
                        {selectedStaff(values.staffMember).name.first[0]}
                        {selectedStaff(values.staffMember).name.last[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span>
                      {selectedStaff(values.staffMember).name.first}{' '}
                      {selectedStaff(values.staffMember).name.last}
                    </span>
                  </div>
                )}
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='date'
                  className='block text-sm font-medium mb-1'
                >
                  Date:
                </label>
                <Field
                  type='date'
                  id='date'
                  name='date'
                  className='w-full px-3 py-2 border border-gray-300 rounded'
                />
                <ErrorMessage
                  name='date'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
              </div>
              <div className='flex space-x-4 mb-4'>
                <div className='flex-1'>
                  <label
                    htmlFor='start'
                    className='block text-sm font-medium mb-1'
                  >
                    Scheduled Start:
                  </label>
                  <Field
                    type='text'
                    id='start'
                    name='start'
                    placeholder='e.g. 09:00 or 9am or 9'
                    className='w-full px-3 py-2 border border-gray-300 rounded'
                  />
                  <ErrorMessage
                    name='start'
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>
                <div className='flex-1'>
                  <label
                    htmlFor='end'
                    className='block text-sm font-medium mb-1'
                  >
                    Scheduled End:
                  </label>
                  <Field
                    type='text'
                    id='end'
                    name='end'
                    placeholder='e.g. 17:00 or 5pm or 17'
                    className='w-full px-3 py-2 border border-gray-300 rounded'
                  />
                  <ErrorMessage
                    name='end'
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='site'
                  className='block text-sm font-medium mb-1'
                >
                  Site:
                </label>
                <Field
                  type='text'
                  id='site'
                  name='site'
                  placeholder='Enter site'
                  className='w-full px-3 py-2 border border-gray-300 rounded'
                />
                <ErrorMessage
                  name='site'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='job'
                  className='block text-sm font-medium mb-1'
                >
                  Job:
                </label>
                <Field
                  type='text'
                  id='job'
                  name='job'
                  placeholder='Enter job'
                  className='w-full px-3 py-2 border border-gray-300 rounded'
                />
                <ErrorMessage
                  name='job'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
              </div>
              <div className='flex justify-between mt-6'>
                <button
                  style={{ width: '270px' }}
                  type='button'
                  onClick={onClose}
                  className='bg-gray-300 text-black rounded-lg px-4 py-2 border-none cursor-pointer'
                >
                  Cancel
                </button>
                <button
                  style={{ backgroundColor: '#263B8C', width: '270px' }}
                  type='submit'
                  className='bg-blue-500 text-white rounded-lg px-4 py-2 border-none cursor-pointer'
                >
                  Assign
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Modal;
