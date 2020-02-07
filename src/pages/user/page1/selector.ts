import { createSelector } from 'reselect'
import { IConnectState } from '@/models/connect.d'

// page1的的user的user展示的user展示类型
export interface page1UserType {
  id: number,
  name: string,
  email: string,
  website: string,
}

/**
 * 返回user展示的信息
 */
export const usersSelector = createSelector(
  [
    (state: IConnectState) => state.users.list,
  ],
  // (list): page1UserType[] => {
  //   // 过滤数据
  //   const users = list.map(user => ({
  //     id: user.id,
  //     name: user.name,
  //     email: user.email,
  //     website: user.website,
  //   }))
  //   // 返回最终展示对的数据
  //   return users
  (users): page1UserType[] => users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    website: user.website,
  })),
)
