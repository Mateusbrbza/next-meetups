import {MongoClient} from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

// const MEETUPS = [
//   {
//     id: 'm1',
//     title: 'primeiro encontro',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Morro_da_Cruz%2C_Florianópolis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg',
//     address: 'morro da cruz, Florianopolis',
//     Description: 'lugar lindo'
//   },
//   {
//     id: 'm2',
//     title: 'segundo encontro',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Catedral_de_florianopolis.JPG',
//     address: 'Praça XV, Florianopolis',
//     Description: 'em frente a catedral'
//   }
// ];

function HomePage(props) {
  return (
      <MeetupList
      meetups={props.meetups}
      />
  )
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from api
  const client = await MongoClient.connect(
    'mongodb+srv://mateus:3102088@cluster0.wrejpcv.mongodb.net/?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1
  };
}

export default HomePage;