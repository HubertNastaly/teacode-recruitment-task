import { List } from '@mui/material'
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'

import { ContactsListItem } from './ContactsListItem'
import { Searchbar } from './Searchbar'
import { Contact } from '../types'

const DELAY = 200 //ms

interface Props {
  allContacts: Contact[]
}

export const ContactsList = ({ allContacts }: Props) => {
  const [checkedContacts, setCheckedContacts] = useState<Set<number>>(new Set())
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>(allContacts)

  const handleSearchChange = useCallback(
    debounce(
      (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const searchText = event.target.value.toLowerCase()

        if(searchText === '') {
          setFilteredContacts(allContacts)
          return
        }

        setFilteredContacts(filterContacts(allContacts, searchText))
      },
      DELAY
    )
    , [])

  const handleCheckChange = useCallback((contactId: number, checked: boolean) => {
    setCheckedContacts(checkedContacts => {
      const newCheckedContacts = new Set(checkedContacts)
      if(checked) {
        newCheckedContacts.add(contactId)
      } else {
        newCheckedContacts.delete(contactId)
      }
      console.log({ checkedContactIds: Array.from(newCheckedContacts) })
      return newCheckedContacts
    })
  }, [setCheckedContacts])

  return (
    <>
      <Searchbar onChange={handleSearchChange} />
      <ListStyled>
        {filteredContacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            checked={checkedContacts.has(contact.id)}
            onCheckChange={handleCheckChange}
          />
        ))}
      </ListStyled>
    </>
  )
}

function filterContacts(contacts: Contact[], searchText: string) {
  return contacts.filter(({ firstName, lastName }) => {
    return [firstName, lastName].some(text => text.toLowerCase().includes(searchText))
  })
}

const ListStyled = styled(List)`
  width: 100%;
`
