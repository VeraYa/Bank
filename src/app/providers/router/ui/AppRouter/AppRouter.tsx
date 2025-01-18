import { Route, RouteProps, Routes } from 'react-router-dom'
import { routeConfig } from '../../config/routerConfig'

const AppRouter = () => {
  const makeRoute = (route: RouteProps) => {
    const { path, element } = route

    return <Route path={path} element={element} key={path} />
  }

  const renderRoutes = Object.values(routeConfig).map(makeRoute)

  return <Routes>{renderRoutes}</Routes>
}

export default AppRouter
