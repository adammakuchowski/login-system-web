import Footer from '../footer/Footer'
import Header from '../header/Header'
import {LayoutContainer} from './LayoutStyled'

interface LayoutProps {
  children: JSX.Element
}

const Layout = ({children}: LayoutProps): JSX.Element => (
  <LayoutContainer>
    {/* <Header /> */}
    {children}
    {/* <Footer /> */}
  </LayoutContainer>
)

export default Layout
