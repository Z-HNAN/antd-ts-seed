import { createSelector } from 'reselect'

import { IConnectState } from '@/models/connect.d'

import {
  IUser,
} from '@/models/users'

export interface UserCardType {
  id: number
  name: string
  email: string
  website: string
}

/**
 * 获取用户列表所需要的卡片展示数据
 */
export const userCardSelector = createSelector(
  [
    (state: IConnectState) => state.users.list,
  ],
  // eslint-disable-next-line arrow-body-style
  (list): UserCardType[] => {
    return list.map((user: IUser) => { 
      const { id, name, email, website } = user

      return {
        id,
        name,
        email,
        website,
      }
    })
  },
)
