import classNames from 'classnames';
import { Container, RichText, Spacer } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import * as S from './styles';

export default function About() {

  return (
    <Container height='full' className={classNames('topics')}>
      <S.ContentWrapper>
        <h1>Texto</h1>
      </S.ContentWrapper>
    </Container>
  )
}

About.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
)