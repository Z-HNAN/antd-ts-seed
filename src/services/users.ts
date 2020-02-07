import request from '@/utils/request'

import { IUser } from '../models/users'

export async function fetch() {
  return request('users?_limit=3');
}

export async function remove({ id }: { id: string }) {
  return request(`users/${id}`, {
    method: 'DELETE',
  })
}

export async function create(values: IUser) {
  const { email, name, website } = values
  return request('users', {
    method: 'POST',
    data: {
      email,
      name,
      website,
    },
  })
}
