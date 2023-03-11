import { Contact } from "../types"

const SAMPLE_CONTACTS: Contact[] = [
  {
    id: 1,
    firstName: 'Suzie',
    lastName: 'Kydd',
    email: 'skydd0@prnewswire.com',
    gender: 'Female',
    avatar: 'https://robohash.org/fugiatautemodit.png?size=50x50&set=set1'
  },
  {
    id: 2,
    firstName: 'Finley',
    lastName: 'Fenich',
    email: 'ffenich1@spotify.com',
    gender: 'Male',
    avatar: 'https://robohash.org/doloribusaspernaturea.png?size=50x50&set=set1'
  },
  {
    id: 3,
    firstName: 'Jim',
    lastName: 'Sedgemond',
    email: 'jsedgemond2@chron.com',
    gender: 'Male',
    avatar: 'https://robohash.org/magniestporro.png?size=50x50&set=set1'
  }
]

export function useContacts() {
  return SAMPLE_CONTACTS
}
