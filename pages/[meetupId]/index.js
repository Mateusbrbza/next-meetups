import {Fragment} from 'react';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail 
    image="https://upload.wikimedia.org/wikipedia/commons/0/09/Morro_da_Cruz%2C_Florianópolis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg"
    title="A primeira reuniao da semana"
    address="florinaopolis, flroianopliis"
    description="descricao da reuniao "
    />
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { 
        params: {
          meetupId: 'm1',
      },
    },
    { 
        params: {
          meetupId: 'm2',
      },
    },
    ]
  }
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: 
        "https://upload.wikimedia.org/wikipedia/commons/0/09/Morro_da_Cruz%2C_Florianópolis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg",
        id: 'meetupId',
        title: 'primeira reuniao',
        address: 'florinaopolis, flroianopliis',
        description: 'descricao da reuniao',
      }
    }
  }
}

export default MeetupDetails;