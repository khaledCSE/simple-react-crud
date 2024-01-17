import { FC, Fragment, ReactNode } from "react"
import Header from '../shared/Header'
import { Container } from "reactstrap"

interface IProps {
  children: ReactNode
}

const BaseLayout: FC<IProps> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Container>
        {children}
      </Container>
    </Fragment>
  )
}

export default BaseLayout