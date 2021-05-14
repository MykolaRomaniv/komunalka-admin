import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CustomUserMenuItems from 'components/CustomUserMenuItems'
import { AppBar, AppBarProps, UserMenu } from 'react-admin'

const useStyles = makeStyles({
  avatar: {
    height: 30,
    width: 30,
  },
})

const CustomAvatar = () => {
  const classes = useStyles()
  return (
    <Avatar className={classes.avatar}>
      <AccountCircleIcon />
    </Avatar>
  )
}

export interface IUserMenuProps {
  children: React.ReactNode
  label: string
  logout: JSX.Element
  icon: React.ReactNode
}

// TODO fix type conflicts in lib, maybe make PR
const CustomUserMenu = (props: any): JSX.Element => (
  <UserMenu {...(props as IUserMenuProps)} icon={<CustomAvatar />}>
    <CustomUserMenuItems />
  </UserMenu>
)

// TODO fix type conflicts in lib, maybe make PR
const CustomAppBar = (props: any): JSX.Element => (
  <AppBar {...(props as AppBarProps)} userMenu={<CustomUserMenu />} />
)

export default CustomAppBar
