import { Route } from 'react-router-dom'

import routes from '../../constants/routes'
import UserSettings from '../../containers/UserSettings'

export default [
  <Route
    key={routes.userSettings}
    exact
    path={routes.userSettings}
    component={UserSettings}
  />,
]
