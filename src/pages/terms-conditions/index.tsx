import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';

export default function termsConditions() {

  return (
    <Container className={classNames('topics')}>
      
    </Container>
  )
}

termsConditions.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
)
