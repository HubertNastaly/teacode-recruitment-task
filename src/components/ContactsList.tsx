import { LinearProgress, List, Typography } from '@mui/material'
import styled from 'styled-components'
import { useContacts } from '../hooks/useContacts'
import { ContactsListItem } from './ContactsListItem'

export const ContactsList = () => {
  const { contacts } = useContacts()

  return (
    <Container>
      <Heading variant="h4">Contacts</Heading>
      {!contacts ? (
        <LinearProgress />
      ) : (
        <ListStyled>
          {contacts.map(contact => (
            <ContactsListItem
              key={contact.id}
              contact={contact}
            />
          ))}
        </ListStyled>
      )}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 600px;
`

const ListStyled = styled(List)`
  width: 100%;
`

const Heading = styled(Typography)`
  color: white;
`
