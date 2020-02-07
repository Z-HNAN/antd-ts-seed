import { Reducer } from 'redux'
import { Subscription, Effect } from 'dva'
import { IConnectState } from './connect.d'
import { UserInfoFormParams } from '@/pages/user/page1/components/UserInfoForm'
import { EMPTY_USERINFO_PARAMS } from '@/pages/user/page1/components/UserInfoModal'


import * as userService from '@/services/users'

export interface IUser {
  id: number
  name: string
  email: string
  website: string
}

export interface IUsersModelState {
  list: IUser[]
  edit: UserInfoFormParams
}

export interface IUsersModelType {
  namespace: 'users'
  state: IUsersModelState
  reducers: {
    /* 存入state中 */
    save: Reducer<any>,
    /* 改变当前正在修改的user */
    changeEdit: Reducer<any>,
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
    edit: EMPTY_USERINFO_PARAMS,
  },
  reducers: {
    save(state, { payload: list }) {
      return { ...state, list }
    },
    changeEdit(state, { payload: { user } }) {
      return { ...state, edit: user }
    },
  },
  effects: {
    *fetch(_, { call, put }) {
      const list = yield call(userService.fetch)
      yield put({ type: 'save', payload: list })
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
      yield call(userService.create, { ...payload })
      yield put({ type: 'fetch' })
    },
  },

  subscriptions: {
    init({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/user/page1') {
          dispatch({ type: 'init' })
        }
      })
    },
  },
}

export default UsersModel
