import React, { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Typography, Checkbox, List, ListItem } from '@mui/material';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import './index.css';
import Header from "../../Components/Header";

const Calendar = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateSelect = (selectInfo) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'?`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  return (
    <Box display="flex" height="100vh">
              <Sidebar
        weekendsVisible={weekendsVisible}
        handleWeekendsToggle={handleWeekendsToggle}
        currentEvents={currentEvents}
      />
      <Box flex={1} ml={30} height="100%">
        {/* Ajout de ml pour prendre en compte la Sidebar avec une largeur de 300px */}
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </Box>
    </Box>
  );
};

const renderEventContent = (eventInfo) => {
  return (
    <>
      <Typography variant="body2" fontWeight="bold">
        {eventInfo.timeText}
      </Typography>
      <Typography variant="body2">{eventInfo.event.title}</Typography>
    </>
  );
};

const Sidebar = ({ weekendsVisible, handleWeekendsToggle, currentEvents }) => {
  return (
    <Box
      sx={{
        width: 300,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        p: 2,
        height: "100vh",
        position: "fixed",
        top: "60px",
        left: "60px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Instructions
      </Typography>
      <Typography variant="body2" gutterBottom>
        <ul>
          <li>Select dates and create new events</li>
          <li>Drag, drop, and resize events</li>
          <li>Click on an event to delete it</li>
        </ul>
      </Typography>

      <Box my={2}>
        <Checkbox
          checked={weekendsVisible}
          onChange={handleWeekendsToggle}
        />
        <Typography component="span">Toggle weekends</Typography>
      </Box>

      <Typography variant="h6">All Events ({currentEvents.length})</Typography>
      <List>
        {currentEvents.map((event) => (
          <SidebarEvent key={event.id} event={event} />
        ))}
      </List>
    </Box>
  );
};

const SidebarEvent = ({ event }) => {
  return (
    <ListItem>
      <Typography variant="body2" fontWeight="bold">
        {formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}
      </Typography>
      <Typography variant="body2">{event.title}</Typography>
    </ListItem>
  );
};

export default Calendar;
