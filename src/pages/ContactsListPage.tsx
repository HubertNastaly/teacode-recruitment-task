import { Container, LinearProgress, Typography } from '@mui/material'
import { ContactsList } from '../components/ContactsList'
import { Page } from '../components/Page'
import { useSortedContacts } from '../hooks/useSortedContacts'

export const ContactsListPage = () => {
  const { contacts } = useSortedContacts()

  return (
    <Page>
      <Container sx={{ width: '100%' }} maxWidth='md'>
        <Typography variant="h4" marginBottom={2}>Contacts</Typography>
        {!contacts ? (
          <LinearProgress />
        ) : (
          <ContactsList allContacts={contacts} />
        )}
      </Container>
    </Page>
  )
}
