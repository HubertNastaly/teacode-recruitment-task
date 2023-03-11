import { Container } from '@mui/material'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const Page = ({ children }: Props) => {
  return (
    <Container sx={{ width: '100%', paddingTop: '80px' }} maxWidth={false}>
      {children}
    </Container>
  )
}
