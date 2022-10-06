import {MongoClient} from 'mongodb';

// api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const dat = req.body;

        const {title, image, address, description} = data;

        const client = await MongoClient.connect(
        'mongodb+srv://mateus:3102088@cluster0.wrejpcv.mongodb.net/?retryWrites=true&w=majority'
        );
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne({data});

        console.log(result);

        client.close();

        res.status(201).json({message: 'Success!'});
    }
}

export default handler;