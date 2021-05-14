import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import useTextInput from 'hooks/useTextInput'
import { useEffect, useState } from 'react'
import { useNotify } from 'react-admin'
import authProvider from 'services/authProvider'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}))

const UserSettings = (): JSX.Element => {
  const classes = useStyles()
  const [user, setUser] = useState<firebase.default.User>()
  const notify = useNotify()
  const [displayName, onDisplayNameChange, setDisplayName] = useTextInput('')

  useEffect(() => {
    authProvider
      .checkAuth({})
      .then((res) => {
        setUser(res as unknown as firebase.default.User)
      })
      .catch((err) => notify(err, 'error'))
  }, [])

  useEffect(() => {
    setDisplayName(user?.displayName || '')
  }, [user])

  const onUpdateClick = () => {
    user
      ?.updateProfile({
        displayName,
        // photoURL: '',
      })
      .then(() => {
        notify('Success. Please reload page to see updates')
      })
      .catch((error: any) => {
        notify(error, 'error')
      })
  }

  return (
    <div>
      <form autoComplete="off" className={classes.root}>
        <TextField
          id="displayName"
          label="Display Name"
          value={displayName}
          onChange={onDisplayNameChange}
        />
      </form>
      <Button variant="contained" color="primary" onClick={onUpdateClick}>
        {'Update'}
      </Button>
    </div>
  )
}

export default UserSettings
