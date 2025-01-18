import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { IStateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

interface IStoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<IStateSchema>
}

export const StoreProvider = (props: IStoreProviderProps) => {
  const { children, initialState } = props

  const store = createReduxStore(initialState as IStateSchema)

  return <Provider store={store}>{children}</Provider>
}
