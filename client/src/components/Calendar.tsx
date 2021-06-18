import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import EventModal from './Event/EventModal'
import EventPopover from './Event/EventPopover'

const localizer = momentLocalizer(moment)

const MyCalendar = () => {
  const [ myEventsList, setMyEventsList ] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // const newEvent

  const selectSlot = () => {
    // setSelectedStartDate(start);
    // setSelectedEndDate(end);
    setIsModalOpen(true);
  }

  return (
    <div className="calendar">
      <div style={{ height: '100vh' }}>
        <Calendar
          localizer={localizer}
          // events={transformItems(data.eventsList)}
          components={{ event: EventPopover }}
          showMultiDayTimes
          selectable
          onSelectSlot={() => selectSlot()}
        />

        <EventModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          event={{
            startAt: selectedStartDate,
            endAt: selectedEndDate,
            title: '',
            email: '',
            description: ''
          }}
        />
      </div>
    </div>
  );
}

export default MyCalendar;