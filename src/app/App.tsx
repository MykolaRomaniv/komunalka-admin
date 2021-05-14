/* eslint-disable import/no-extraneous-dependencies */
import 'firebase/analytics'
import 'firebase/database'

import CustomLayout from 'common/CustomLayout'
import {
  AddressesCreate,
  AddressesEdit,
  AddressesList,
} from 'components/Addresses'
import { BillsCreate, BillsEdit, BillsList } from 'components/Bills'
import { CountersCreate, CountersEdit, CountersList } from 'components/Counters'
import CustomRoutes from 'components/CustomRoutes'
import { UsersCreate, UsersEdit, UsersList } from 'components/Users'
import firebase from 'firebase/app'
import firebaseDataProvider from 'ra-data-firebase-client'
import { Admin, Resource } from 'react-admin'
import authProvider from 'services/authProvider'
import firebaseConfig from 'services/firebaseConfig'

// TODO uncomment when will use this functionality
// import 'firebase/auth'
// import 'firebase/firestore'

// Initialize Firebase
const defaultFirebase = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

defaultFirebase.analytics()

const settings = { context: '', imagekey: 'images', filekey: 'files' }

const App = (): JSX.Element => (
  <Admin
    dataProvider={firebaseDataProvider(firebase, settings)}
    authProvider={authProvider}
    layout={CustomLayout}
    customRoutes={CustomRoutes}
  >
    <Resource
      name="users"
      options={{ label: 'Користувачі' }}
      list={UsersList}
      edit={UsersEdit}
      create={UsersCreate}
    />
    <Resource
      name="addresses"
      options={{ label: 'Адреси' }}
      list={AddressesList}
      edit={AddressesEdit}
      create={AddressesCreate}
    />
    <Resource
      name="counters"
      options={{ label: 'Лічильники' }}
      list={CountersList}
      edit={CountersEdit}
      create={CountersCreate}
    />
    <Resource
      name="bills"
      options={{ label: 'Рахунки' }}
      create={BillsCreate}
      list={BillsList}
      edit={BillsEdit}
    />
  </Admin>
)

export default App
