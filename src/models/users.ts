import { Reducer } from 'redux'
import { Subscription, Effect } from 'dva'
import { IConnectState } from './connect.d'

import * as userService from '@/services/users'

export interface IUser {
  id: number
  name: string
  email: string
  website: string
}

export interface IUsersModelState {
  list: IUser[]
}

export interface IUsersModelType {
  namespace: 'users'
  state: IUsersModelState
  reducers: {
    /* 存入state中 */
    save: Reducer<any>,
  }
  effects: {
    /* 拉取用户 */
    fetch: Effect,
    /* 初始化用户 */
    init: Effect,
    /* 删除用户 */
    remove: Effect,
    /* 创建用户 */
    create: Effect,
  }
  subscriptions: {
    /* 页面初始化 加载数据 */
    init: Subscription,
  }
}

const UsersModel: IUsersModelType = {
  namespace: 'users',
  state: {
    list: [],
  },
  reducers: {
    save(state, { payload: { data: list } }) {
      return { ...state, list }
    },
  },
  effects: {
    *fetch(_, { call, put }) {
      const data = yield call(userService.fetch)
      yield put({ type: 'save', payload: { data } })
    },
    *init(_, { put, select }) {
      const list = yield select((state: IConnectState) => state.users.list)
      // 只有用户列表为空的时候才会去拉取用户
      if (list.length === 0) {
        yield put({ type: 'fetch' })
      }
    },
    *remove({ payload }, { call, put }) {
      const { id } = payload
      yield call(userService.remove, { id })
      yield put({ type: 'fetch' })
    },
    *create({ payload }, { call, put }) {
      const { values } = payload
      yield call(userService.create, { values })
      yield put({ type: 'fetch' })
    },
  },

  subscriptions: {
    init({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({ type: 'init' })
        }
      })
    },
  },
}

export default UsersModel
