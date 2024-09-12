'use client';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrdiPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const events = [{ title: 'Meeting', start: new Date() }];
const ReactCalendar = () => {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGrdiPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        events={events}
        eventContent={renderEventContent}
        headerToolbar={{
          start: 'today,prev,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
      />
    </div>
  );
};

export default ReactCalendar;

function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
