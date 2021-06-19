import React from 'react';
// @ts-ignore
import Modal from 'react-modal';

import EventForm from './EventForm';
import '../../assets/css/Event.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

// @ts-ignore
const EventModal = ({ isOpen, closeModal, event }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Event Modal"
    >
      <p onClick={closeModal} className="close">
        X
      </p>
      <EventForm
        key="main"
        event={event}
        closeModal={closeModal}
      />
    </Modal>
  );
};

export default EventModal;