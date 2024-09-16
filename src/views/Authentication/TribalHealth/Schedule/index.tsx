'use client';
import React, { Fragment, useState, useEffect } from 'react';
import ReactCalendar from '../ReactCalendar';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandEmpty,
} from '@/components/ui/command';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IEvent, StateProps } from '@/types/Interfaces/userData';
import Modal from '@/components/ui/modal'; // Import the Modal component

const Schedule = ({ userData }: { userData: StateProps }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';

    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // Function to handle adding an event
  const addEvent = (newEvent: { title: string; start: Date; end: Date }) => {
    setEvents([...events, newEvent]);
  };

  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <button
          onClick={handleOpenModal}
          style={{
            backgroundColor: '#263B8C',
            color: 'white',
            borderRadius: '8px',
            padding: '8px 16px',
            border: 'none',
          }}
        >
          + New Shift
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        userData={userData} // Pass the user data to the modal
        addEvent={addEvent} // Pass the addEvent function to the modal
      />

      <div className='flex'>
        <div className='w-1/4 p-4'>
          {/* Shadcn Component on the left */}
          <Command>
            <CommandInput placeholder='Find Staff...' />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading='Users'>
                {userData.results.map((user, index) => (
                  <CommandItem
                    key={index}
                    className='flex items-center'
                  >
                    <Checkbox style={{ marginRight: '1rem' }} />
                    <Avatar className='mr-2'>
                      <AvatarImage src={user.picture.large} />
                      <AvatarFallback>
                        {user.name.first[0]}
                        {user.name.last[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span>
                      {user.name.first} {user.name.last}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </CommandList>
          </Command>
        </div>
        <div className='flex-1 p-4'>
          {/* Calendar on the right */}
          <ReactCalendar events={events} />
        </div>
      </div>
      <button>modal 2</button>
    </Fragment>
  );
};

export default Schedule;
