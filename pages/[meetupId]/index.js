import {Fragment} from 'react';

import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return (
    <MeetupDetail 
    image="https://upload.wikimedia.org/wikipedia/commons/0/09/Morro_da_Cruz%2C_Florianópolis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg"
    title="A primeira reuniao da semana"
    address="florinaopolis, flroianopliis"
    description="descricao da reuniao "
    />
  )
}

export default MeetupDetails;