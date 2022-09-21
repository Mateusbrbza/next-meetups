import { useEffect, useState } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const MEETUPS = [
  {
    id: 'm1',
    title: 'primeiro encontro',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Morro_da_Cruz%2C_Florianópolis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg',
    address: 'morro da cruz, Florianopolis',
    Description: 'lugar lindo'
  },
  {
    id: 'm2',
    title: 'segundo encontro',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Catedral_de_florianopolis.JPG',
    address: 'Praça XV, Florianopolis',
    Description: 'em frente a catedral'
  }
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    //simulating data fetch from a server
    // send the http request, then setLoadadedMeetups
    setLoadedMeetups(MEETUPS);
  }, []);

  return (
      <MeetupList
      meetups={loadedMeetups}
      />
  )
}

export default HomePage;