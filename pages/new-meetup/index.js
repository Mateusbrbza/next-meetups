import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const newMeetupPage = () => {
  async function addMeetupHandler(enteredMeetupData) {
   const response = await fetch('/api/new-meetup');
  }
  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default newMeetupPage;