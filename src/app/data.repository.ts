/*
 * This file contains an in-memory data repository
 * For  early stages of development.
 * While not having a Rest API.
 */
export const DATA = {
  activities: [
    {
      ageCategory: 'adult',
      currentParticipants: 1,
      date: '2025-01-01',
      description:
        '## Rafting at the Grand Canyon\r\n Experience the **adrenaline** in this _natural wonder_.',
      id: 1,
      location: 'Grand canyon',
      maxParticipants: 10,
      price: 100,
      slug: 'grand-canyon-rafting',
      status: 'published',
      title: 'Grand canyon rafting',
      userId: 1,
    },
    {
      ageCategory: 'family',
      currentParticipants: 0,
      date: '2025-03-01',
      description:
        '## Explore the Cumbre Vieja **Volcano**\n Experience the **force** of this _natural beast_ on the beautiful island of La Palma',
      id: 2,
      location: 'Cumbre Vieja',
      maxParticipants: 30,
      price: 20,
      slug: 'cumbre-vieja-exploration',
      status: 'published',
      title: 'Cumbre Vieja exploration',
      userId: 1,
    },
    {
      ageCategory: 'adult',
      currentParticipants: 4,
      date: '2024-01-01',
      description:
        '## Hot air Ballon ride over Cappadocia\r\n Experience the **tranquility** in this _natural beauty_.',
      id: 666,
      location: 'Capadoccia',
      maxParticipants: 4,
      price: 200,
      slug: 'balloon-in-cappadocia',
      status: 'cancelled',
      title: 'Balloon in Cappadocia',
      userId: 1,
    },
    {
      ageCategory: 'family',
      currentParticipants: null,
      date: '2023-11-09',
      description:
        'Want you to paddleboard on **Switzerland**?\n With a surface of almost _114 square kilometers_, Lake Lucerne is a popular destination for stand-up paddlers.',
      id: 667,
      location: 'Lucerne',
      maxParticipants: 6,
      price: '50',
      slug: 'stand-up-paddle-surf-in-lake-lucerne',
      status: 'published',
      title: 'Stand-up paddle surf in Lake Lucerne',
      userId: 1,
    },
  ],
  activityStatuses: [
    {
      caption: 'Published',
      icon: '📢',
      id: 'published',
    },
    {
      caption: 'Cancelled',
      icon: '🚫',
      id: 'cancelled',
    },
  ],
  ageCategories: [
    {
      caption: 'Adult',
      icon: '👨🏼‍🦰',
      id: 'adult',
    },
    {
      caption: 'Child',
      icon: '👦🏼',
      id: 'child',
    },
    {
      caption: 'Family',
      icon: '👨‍👩‍👧‍👦',
      id: 'family',
    },
  ],
  author: {
    github: 'https://github.com/albertobasalo',
    linkedIn: 'https://www.linkedin.com/in/albertobasalo/',
    name: 'Alberto Basalo',
    twitter: 'https://twitter.com/albertobasalo',
    www: 'https://www.albertobasalo.dev',
  },
  contacts: [],
  participants: [
    {
      acceptConditions: true,
      activityId: 1,
      address: 'No way 666',
      email: 'jeff@acme.com',
      id: 1,
      name: 'Jeff Gates',
      paymentMethod: 'card',
      phone: '+1 (415) 555-5555',
      userId: 2,
    },
    {
      acceptConditions: true,
      activityId: 667,
      address: 'My home 1',
      email: 'mark@page.me',
      id: 2,
      name: 'Mark Page',
      paymentMethod: 'cash',
      phone: '555123456',
      userId: 3,
    },
  ],
  paymentMethods: [
    {
      caption: 'Cash',
      icon: '💵',
      id: 'cash',
    },
    {
      caption: 'Card',
      icon: '💳',
      id: 'card',
    },
    {
      caption: 'Transfer',
      icon: '🏦',
      id: 'transfer',
    },
  ],
  users: [
    {
      email: 'richard@action.org',
      id: 1,
      name: 'Richard Musk',
      password: '$2a$10$qgO/y3C3NS38PvH4SxcbNOdT6K5IVNnAg/qcQZfcpZEy.42S1x3d6',
    },
    {
      email: 'jeff@acme.com',
      id: 2,
      name: 'Jeff Gates',
      password: '$2a$10$lCtDeV5VWpL4nmqwFiY8n.VRtUH4Tkm4I1kAPcUxyP21HXdNTLtDa',
    },
    {
      email: 'mark@page.me',
      id: 3,
      name: 'Mark Page',
      password: '$2a$10$C.pMT8gtyt5kSiGzv7y7w.QvHJMgz6RC9ggjYRKFHFjdU5AykLFpO',
    },
  ],
};
