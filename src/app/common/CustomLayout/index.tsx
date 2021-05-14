import CustomAppBar from 'components/CustomAppBar'
import { Layout, LayoutProps } from 'react-admin'

const CustomLayout = (props: LayoutProps): JSX.Element => (
  <Layout
    {...props}
    appBar={CustomAppBar}
    // sidebar={}
    // menu={}
    // notification={}
  />
)

export default CustomLayout
