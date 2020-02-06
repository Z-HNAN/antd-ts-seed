import { IUsersModelState } from './users'
import { GlobalModelStateType } from './global'

export {
  IUsersModelState,
  GlobalModelStateType,
}

export interface LoadingType {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    post?: boolean;
    postInfo?: boolean;
    schedule?: boolean;
  };
}

export interface IConnectState {
  loading: LoadingType
  users: IUsersModelState
  global: GlobalModelStateType
}

// export interface Route  {
//   routes?: Route[];
// }

// export interface IConnectProps<T = {}> extends Partial<RouterTypes<Route, T>> {
//   dispatch?<K = any>(action: AnyAction): K;
// }
