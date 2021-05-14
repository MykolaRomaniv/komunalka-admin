import { FirebaseAuthProvider } from 'react-admin-firebase'

// react-admin-firebase can also be used for firestore dataProvider
import firebaseConfig from './firebaseConfig'

const authProvider = FirebaseAuthProvider(firebaseConfig, {})

export default authProvider
