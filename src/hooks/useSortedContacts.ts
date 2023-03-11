import { useEffect, useState } from 'react'
import { ApiContact, asContact, Contact } from '../types'

const CONTACTS_ENDPOINT = 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json'

export function useSortedContacts() {
  const [contacts, setContacts] = useState<Contact[]>()

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(CONTACTS_ENDPOINT)
        if(response.ok) {
          const contacts = (await response.json() as ApiContact[]).map(asContact)
          setContacts(contacts.sort(byLastName))
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchContacts()
  }, [])

  return { contacts }
}

function byLastName (contactA: Contact, contactB: Contact) {
  return contactA.lastName.localeCompare(contactB.lastName)
}
