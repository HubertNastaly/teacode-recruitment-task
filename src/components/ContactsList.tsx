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
  const [filteredContacts, setFilteredContacts] = useState(allContacts)

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

  return (
    <>
      <Searchbar onChange={handleSearchChange} />
      <ListStyled>
        {filteredContacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            contact={contact}
          />
        ))}
      </ListStyled>
    </>
  )
}

function filterContacts(contacts: Contact[], searchText: string) {
  return contacts.filter(({ firstName, lastName, email }) => {
    return [firstName, lastName, email].some(text => text.toLowerCase().includes(searchText))
  })
}

const ListStyled = styled(List)`
  width: 100%;
`
