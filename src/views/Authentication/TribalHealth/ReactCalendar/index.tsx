'use client';
// import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { IEvent, IeventInfo } from '@/types/Interfaces/userData';

const ReactCalendar = ({ events }: { events: IEvent[] }) => {
  // useEffect(() => {
  //   const dayHeaderCells = document.querySelectorAll('.fc-col-header-cell');
  //   dayHeaderCells.forEach(cell => {
  //     (cell as HTMLElement).style.width = '200px'; // Adjust the width as needed
  //   });
  //   // Adjust cell heights after the calendar is rendered
  //   const dayCells = document.querySelectorAll('.fc-daygrid-day');
  //   dayCells.forEach(cell => {
  //     (cell as HTMLElement).style.height = '500px'; // Adjust the height as needed
  //     (cell as HTMLElement).style.width = '200px';
  //   });
  // }, []);

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        events={events}
        eventContent={renderEventContent}
        headerToolbar={{
          start: 'today,prev,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        eventDidMount={info => {
          // Apply styles to the event element
          info.el.style.height = '100px'; // Adjust the height as needed
        }}
      />
    </div>
  );
};

export default ReactCalendar;

function renderEventContent(eventInfo: IeventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
