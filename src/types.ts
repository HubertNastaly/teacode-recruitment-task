export interface Contact {
  id: number
  firstName: string
  lastName: string
  email: string
  gender: 'Male' | 'Female'
  avatar: string
}

export interface ApiContact {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: 'Male' | 'Female'
  avatar: string
}

export function asContact(apiContact: ApiContact): Contact {
  return {
    id: apiContact.id,
    firstName: apiContact.first_name,
    lastName: apiContact.last_name,
    email: apiContact.email,
    gender: apiContact.gender,
    avatar: apiContact.avatar
  }
}
