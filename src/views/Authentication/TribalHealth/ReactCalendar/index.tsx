'use client';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { IEvent } from '@/types/Interfaces/userData';

const ReactCalendar = ({
  events,
  onEventClick,
}: {
  events: IEvent[];
  onEventClick: (event: IEvent) => void;
}) => {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        events={events.map(event => ({
          ...event,
          backgroundColor: event.isDeleted ? 'red' : '#1E40AF', // Use red for deleted events
          borderColor: event.isDeleted ? 'red' : '#1E40AF', // Use red border for deleted events
          textColor: event.isDeleted ? 'white' : 'black', // Use white text for deleted events
          editable: !event.isDeleted, // Make deleted events non-editable
        }))}
        eventContent={renderEventContent}
        headerToolbar={{
          start: 'today,prev,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        eventDidMount={info => {
          info.el.style.height = '100px';
        }}
        eventClick={info => {
          const eventData: IEvent = {
            title: info.event.title,
            start: info.event.start as Date,
            end: info.event.end as Date,
            site: info.event.extendedProps.site as string,
            actualStart: info.event.extendedProps.actualStart as string,
            actualEnd: info.event.extendedProps.actualEnd as string,
            profilePicture: info.event.extendedProps.profilePicture as string,
            employeeName: info.event.extendedProps.employeeName as string,
            isDeleted: info.event.extendedProps.isDeleted as boolean,
          };

          // Only handle event clicks if the event is not deleted
          if (!eventData.isDeleted) {
            onEventClick(eventData);
          }
        }}
      />
    </div>
  );
};

export default ReactCalendar;

function renderEventContent(eventInfo: any) {
  return (
    <div
      className={`flex items-center rounded-lg shadow p-2 overflow-hidden ${
        eventInfo.event.backgroundColor === 'red' ? 'opacity-50' : ''
      }`}
      style={{ border: `4px solid ${eventInfo.event.borderColor}` }}
    >
      <div
        className={`w-1.5 h-8 rounded-l-lg ${eventInfo.event.backgroundColor === 'red' ? 'bg-red-800' : 'bg-blue-800'}`}
      ></div>
      <div className='flex items-center ml-2 flex-1 truncate'>
        <span className='text-gray-700 text-sm font-medium whitespace-nowrap overflow-hidden'>
          {eventInfo.timeText} {eventInfo.event.title}
        </span>
        <i className='fas fa-copy text-blue-800 text-xl ml-2'></i>
      </div>
    </div>
  );
}
