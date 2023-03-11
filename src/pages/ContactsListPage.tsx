import { LinearProgress, Typography } from '@mui/material'
import styled from 'styled-components'
import { ContactsList } from '../components/ContactsList'
import { Page } from '../components/Page'
import { useContacts } from '../hooks/useContacts'

export const ContactsListPage = () => {
  const { contacts } = useContacts()

  return (
    <Page>
      <Container>
        <Heading variant="h4">Contacts</Heading>
        {!contacts ? (
          <LinearProgress />
        ) : (
          <ContactsList allContacts={contacts} />
        )}
      </Container>
    </Page>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 600px;
`

const Heading = styled(Typography)`
  color: white;
`


