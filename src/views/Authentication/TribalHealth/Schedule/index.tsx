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
import Modal from '@/components/ui/modal';
import ViewModal from '@/components/ui/viewModal';
import ConfirmationModal from '@/components/ui/confirmationModal';

const Schedule = ({ userData }: { userData: StateProps }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState<IEvent[]>([]);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

  useEffect(() => {
    document.body.style.overflow =
      isModalOpen || viewModalOpen || confirmationModalOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, viewModalOpen, confirmationModalOpen]);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleOpenViewModal = (event: IEvent) => {
    setSelectedEvent(event);
    setViewModalOpen(true);
  };
  const handleCloseViewModal = () => {
    setSelectedEvent(null);
    setViewModalOpen(false);
  };
  const addEvent = (newEvent: { title: string; start: Date; end: Date }) => {
    setEvents([...events, newEvent]);
  };

  const handleOpenConfirmationModal = () => setConfirmationModalOpen(true);
  const handleCloseConfirmationModal = () => setConfirmationModalOpen(false);

  const handleDeleteEvent = (event: IEvent) => {
    setEvents(
      events.map(e =>
        e.title === event.title &&
        e.start.getTime() === event.start.getTime() &&
        e.end.getTime() === event.end.getTime()
          ? { ...e, isDeleted: true }
          : e,
      ),
    );
    handleCloseViewModal(); // Close the modal after deletion
    handleCloseConfirmationModal(); // Close the confirmation modal
  };

  const handleConfirmDelete = () => {
    if (selectedEvent) {
      handleDeleteEvent(selectedEvent);
    }
  };

  return (
    <Fragment>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
        userData={userData}
        addEvent={addEvent}
      />

      <ViewModal
        isOpen={viewModalOpen}
        onClose={handleCloseViewModal}
        event={selectedEvent}
        onDelete={() => handleOpenConfirmationModal()} // Open confirmation modal
      />

      <ConfirmationModal
        isOpen={confirmationModalOpen}
        onClose={handleCloseConfirmationModal}
        onConfirm={handleConfirmDelete}
        message='Are you sure you want to delete this shift?'
      />

      <div className='flex'>
        <div className='w-1/4 p-4'>
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
          <ReactCalendar
            events={events}
            onEventClick={handleOpenViewModal}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Schedule;
