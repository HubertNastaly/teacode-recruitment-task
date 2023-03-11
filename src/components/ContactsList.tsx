import { List } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'

import { ContactsListItem } from './ContactsListItem'
import { Searchbar } from './Searchbar'
import { Contact } from '../types'

interface Props {
  allContacts: Contact[]
}

export const ContactsList = ({ allContacts }: Props) => {
  const [filteredContacts] = useState(allContacts)

  return (
    <>
      <Searchbar  />
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

const ListStyled = styled(List)`
  width: 100%;
`
