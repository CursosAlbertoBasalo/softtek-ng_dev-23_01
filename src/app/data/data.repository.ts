import { Author } from "src/app/data/models/author.type";
import {
  ActivityStatus,
  AgeCategory,
  ParticipantStatus,
  PaymentMethod,
} from "src/app/data/models/option.type";
import { Participant } from "src/app/data/models/participant.type";
import { User } from "src/app/data/models/user.type";
import { Activity } from "./models/activity.type";
import { Contact } from "./models/contact.type";

type Data = {
  activities: Activity[];
  activityStatuses: ActivityStatus[];
  ageCategories: AgeCategory[];
  contacts: Contact[];
  paymentMethods: PaymentMethod[];
  participationStatuses: ParticipantStatus[];
  author: Author;
  participants: Participant[];
  users: User[];
};

/*
 * This file contains an in-memory data repository
 * For  early stages of development.
 * While not having a Rest API.
 */
export const DATA: Data = {
  activities: [
    {
      ageCategory: "adult",
      currency: "USD",
      date: "2025-01-01",
      description:
        "## Rafting at the Grand Canyon\r\n Experience the **adrenaline** in this _natural wonder_.",
      id: 1,
      location: "Grand canyon",
      maxParticipants: 10,
      minParticipants: 5,
      price: 300,
      slug: "grand-canyon-rafting",
      status: "published",
      title: "Grand canyon rafting",
      userId: 2,
    },
    {
      ageCategory: "family",
      date: "2025-03-01",
      description:
        "## Explore the Cumbre Vieja **Volcano**\n Experience the **force** of this _natural beast_ on the beautiful island of La Palma",
      id: 2,
      location: "Cumbre Vieja",
      maxParticipants: 30,
      minParticipants: 10,
      price: 50,
      currency: "EUR",
      slug: "cumbre-vieja-exploration",
      status: "published",
      title: "Cumbre Vieja exploration",
      userId: 2,
    },
    {
      ageCategory: "adult",
      currency: "EUR",
      date: "2024-01-01",
      description:
        "## Hot air Ballon ride over Cappadocia\r\n Experience the **tranquility** in this _natural beauty_.",
      id: 666,
      location: "Capadoccia",
      maxParticipants: 4,
      minParticipants: 4,
      price: 200,
      slug: "balloon-in-cappadocia",
      status: "cancelled",
      title: "Balloon in Cappadocia",
      userId: 2,
    },
    {
      ageCategory: "child",
      currency: "USD",
      date: "2023-11-09",
      description:
        "Want you to paddleboard on **Switzerland**?\n With a surface of almost _114 square kilometers_, Lake Lucerne is a popular destination for stand-up paddlers.",
      id: 667,
      location: "Lucerne",
      maxParticipants: 6,
      minParticipants: 4,
      price: 25,
      slug: "stand-up-paddle-surf-in-lake-lucerne",
      status: "published",
      title: "Stand-up paddle surf in Lake Lucerne",
      userId: 5,
    },
  ],
  activityStatuses: [
    {
      caption: "Draft",
      icon: "💭",
      id: "draft",
      userId: 1,
    },
    {
      caption: "Published",
      icon: "📢",
      id: "published",
      userId: 1,
    },
    {
      caption: "Confirmed",
      icon: "✅",
      id: "confirmed",
      userId: 1,
    },
    {
      caption: "Finished",
      icon: "🔚 ",
      id: "finished",
      userId: 1,
    },
    {
      caption: "Cancelled",
      icon: "🚫",
      id: "cancelled",
      userId: 1,
    },
  ],
  ageCategories: [
    {
      caption: "Adult",
      icon: "👨🏼‍🦰",
      id: "adult",
      userId: 1,
    },
    {
      caption: "Child",
      icon: "👦🏼",
      id: "child",
      userId: 1,
    },
    {
      caption: "Family",
      icon: "👨‍👩‍👧‍👦",
      id: "family",
      userId: 1,
    },
  ],
  author: {
    github: "https://github.com/albertobasalo",
    id: 1,
    linkedIn: "https://www.linkedin.com/in/albertobasalo/",
    name: "Alberto Basalo",
    twitter: "https://twitter.com/albertobasalo",
    userId: 1,
    www: "https://www.albertobasalo.dev",
  },
  contacts: [
    {
      address: "No way 666",
      country: "US",
      phone: "+1 (415) 555-5555",
      userId: 2,
      id: 1,
    },
    {
      address: "Mi casa",
      country: "ES",
      phone: "+34 555123456",
      userId: 3,
      id: 2,
    },
    {
      address: "My home 2",
      country: "UK",
      phone: "+44 7975777666",
      userId: 4,
      id: 3,
    },
    {
      address: "99th Avenue",
      country: "US",
      phone: "+1 (212) 5555555",
      userId: 5,
      id: 4,
    },
  ],
  participants: [
    {
      acceptConditions: true,
      activityId: 1,
      id: 1,
      joinedAt: "2023-01-01",
      payedAt: "2023-01-01",
      paymentMethod: "card",
      places: 1,
      reason: "",
      status: "accepted",
      userId: 3,
    },
    {
      acceptConditions: true,
      activityId: 667,
      id: 2,
      joinedAt: "2023-01-01",
      payedAt: "",
      paymentMethod: "transfer",
      places: 2,
      reason: "Not paying on time",
      status: "rejected",
      userId: 4,
    },
  ],
  participationStatuses: [
    {
      caption: "Pending",
      icon: "⏳",
      id: "pending",
      userId: 1,
    },
    {
      caption: "Accepted",
      icon: "✅",
      id: "accepted",
      userId: 1,
    },
    {
      caption: "Rejected",
      icon: "❌",
      id: "rejected",
      userId: 1,
    },
    {
      caption: "Cancelled",
      icon: "🚫",
      id: "cancelled",
      userId: 1,
    },
  ],
  paymentMethods: [
    {
      caption: "Cash",
      icon: "💵",
      id: "cash",
      userId: 1,
    },
    {
      caption: "Card",
      icon: "💳",
      id: "card",
      userId: 1,
    },
    {
      caption: "Transfer",
      icon: "🏦",
      id: "transfer",
      userId: 1,
    },
  ],
  users: [
    {
      email: "lisa@actib.it",
      id: 1,
      name: "Lisa Nadella",
      password: "$2a$10$qgO/y3C3NS38PvH4SxcbNOdT6K5IVNnAg/qcQZfcpZEy.42S1x3d6",
    },
    {
      email: "richard@action.org",
      id: 2,
      name: "Richard Musk",
      password: "$2a$10$qgO/y3C3NS38PvH4SxcbNOdT6K5IVNnAg/qcQZfcpZEy.42S1x3d6",
    },
    {
      email: "jeff@acme.com",
      id: 3,
      name: "Jeff Gates",
      password: "$2a$10$lCtDeV5VWpL4nmqwFiY8n.VRtUH4Tkm4I1kAPcUxyP21HXdNTLtDa",
    },
    {
      email: "mark@page.me",
      id: 4,
      name: "Mark Page",
      password: "$2a$10$C.pMT8gtyt5kSiGzv7y7w.QvHJMgz6RC9ggjYRKFHFjdU5AykLFpO",
    },
    {
      email: "susan@alpha.ms",
      id: 5,
      name: "Susan Yuan",
      password: "$2a$10$C.pMT8gtyt5kSiGzv7y7w.QvHJMgz6RC9ggjYRKFHFjdU5AykLFpO",
    },
  ],
};
