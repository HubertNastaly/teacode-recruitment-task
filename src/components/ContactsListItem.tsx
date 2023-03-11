import { Avatar, Checkbox, colors, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { Contact } from '../types'

interface Props {
  contact: Contact
  onCheckChange: (contactId: number, checked: boolean) => void
  checked: boolean
}

export const ContactsListItemComponent = ({ contact, onCheckChange, checked }: Props) => {
  return (
    <ListItem
      sx={{ bgcolor: colors.blue[50], width: '100%', marginBottom: '8px'}}
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
    </ListItem>
  )
}

export const ContactsListItem = React.memo(ContactsListItemComponent)

