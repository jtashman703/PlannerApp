const mongoose = require('mongoose');
const db = require('../server/db/models');
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/eventplandb',
  {
    useMongoClient: true,
  }
);

const userSeed = [
  {
    firstName: 'Ayra',
    lastName: 'Stark',
    local: {
      email: 'needle@winterfell.com',
    },
  },
  {
    firstName: 'Jon',
    lastName: 'Snow',
    local: {
      email: 'ilovedany@drogon.com',
    },
  },
  {
    firstName: 'Tyrion',
    lastName: 'Lannister',
    local: {
      email: 'survivor@westeros.com',
    },
  },
  {
    firstName: 'The',
    lastName: 'Hound',
    local: {
      email: 'badass@westeros.com',
    },
  },
  {
    firstName: 'Jamie',
    lastName: 'Lannister',
    local: {
      email: 'slayer@westeros.com',
    },
  },
];

const attendeeSeed = [
  {
    attendee: 'President Bill Clinton',
    isgoing: true,
  },
  {
    attendee: 'Larry Ellison - Oracle',
    isgoing: false,
  },
  {
    attendee: 'My Grandma - June Terrell',
    isgoing: false,
  },
];

const eventSeed = [
  {
    name: 'BBQ of Jack Fruit & Gluten Free Buns',
    category: 'Restaurant',
    location: 'Farmers Market',
    address: '7800 Main Street, Overland Park',
    // organizer: '',
    // numRequired: 6,
    attendees: ['Jon', 'Joe', 'Jill', 'Arya', 'Sansa', 'Ned'],
    // potentialDatetimes: new Date('2018-08-17'),
    scheduledDatetime: new Date('2018-08-17'),
    // createdDate: new Date(Date.now()),
    // confirmed: false,
  },
  {
    name: 'Watch Food Documentaries and Eat Designer Popcorn',
    category: 'Entertainment',
    location: 'Toms House',
    address: '4545 Boulevard, KCMO',
    // organizer: '',
    // numRequired: 4,
    attendees: ['Tom', 'Kerry', 'Jackie', 'Ben'],
    // potentialDatetimes: new Date('2018-07-01'),
    scheduledDatetime: new Date('2018-07-11'),
    // createdDate: new Date(Date.now()),
    // confirmed: true,
  },
  {
    name: 'Go to the Quidditch Match',
    category: 'Sports',
    location: 'Hogwarts',
    address: '9.75 London, England',
    // organizer: '',
    // numRequired: 10,
    attendees: [
      'Harry',
      'Ron',
      'Hermione',
      'Fred',
      'George',
      'Percy',
      'Bill',
      'Luna',
      'Nevelle',
      'Ginny',
    ],
    // potentialDatetimes: new Date('2018-08-17'),
    scheduledDatetime: new Date('2018-08-17'),
    // createdDate: new Date(Date.now()),
    // confirmed: true,
  },
];

db.Event.remove({})
  .then(() => db.Event.collection.insertMany(eventSeed, attendeeSeed))
  .then(data => {
    console.log(data.insertedIds.length + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });