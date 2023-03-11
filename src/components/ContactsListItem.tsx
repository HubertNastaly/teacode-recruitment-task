import { Avatar, Checkbox, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import styled from 'styled-components'
import { Contact } from '../types'

interface Props {
  contact: Contact
}

export const ContactsListItem = ({ contact }: Props) => (
  <ListItemStyled
    secondaryAction={<Checkbox edge="end"/>}
  >
    <ListItemAvatar>
      <Avatar src={contact.avatar} />
    </ListItemAvatar>
    <ListItemText
      primary={`${contact.firstName} ${contact.lastName}`}
      secondary={contact.email}
    />
  </ListItemStyled>
)

const ListItemStyled = styled(ListItem)`
  margin-bottom: 8px;
  width: 100%;
  background-color: white;
`