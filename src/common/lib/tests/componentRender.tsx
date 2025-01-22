import { IStateSchema, StoreProvider } from '@app/providers/StoreProvider'
import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

interface IComponentRenderOptions {
  route?: string
  initialState?: DeepPartial<IStateSchema>
}

export const componentRender = (
  component: ReactNode,
  options: IComponentRenderOptions = {}
) => {
  const { route = '/', initialState } = options

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
    </StoreProvider>
  )
}
