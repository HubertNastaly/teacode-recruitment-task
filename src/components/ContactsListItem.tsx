import { Avatar, Checkbox, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { Contact } from '../types'

interface Props {
  contact: Contact
  onCheckChange: (contactId: number, checked: boolean) => void
  checked: boolean
}

export const ContactsListItemComponent = ({ contact, onCheckChange, checked }: Props) => {
  return (
    <ListItemStyled
      secondaryAction={checked && <Checkbox edge="end" checked={true} />}
    >
      <ListItemButton onClick={() => onCheckChange(contact.id, !checked)}>
        <ListItemAvatar>
          <Avatar src={contact.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={`${contact.firstName} ${contact.lastName}`}
          secondary={contact.email}
        />
      </ListItemButton>
    </ListItemStyled>
  )
}

export const ContactsListItem = React.memo(ContactsListItemComponent)

const ListItemStyled = styled(ListItem)`
  margin-bottom: 8px;
  width: 100%;
  background-color: white;
`
