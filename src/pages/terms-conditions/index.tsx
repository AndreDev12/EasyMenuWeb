import classNames from 'classnames';
import { Container, RichText, Spacer } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import * as S from './styles';

export default function termsConditions() {

  return (
    <Container height='full' className={classNames('topics')}>
      <S.ContentWrapper>
        <RichText 
          text='Términos y condiciones del servicio'
          style={{
            textTransform: 'uppercase',
            textAlign: 'center',
            textDecoration: 'underline',
            marginBottom: '1rem'
          }}
        />
        {/* <Spacer customSize='16px' direction='bottom' /> */}
        <Container>
          <RichText text='A continuación, podrán leer los términos y condiciones mediante los que usted podrá usar nuestro servicio de pedidos. Al acceder y utilizar nuestros servicios, usted acepta que ha leído, entiende y está de acuerdo con las condiciones descritas en esta sección "Términos y Condiciones”.' />
        </Container>
      </S.ContentWrapper>
    </Container>
  )
}

termsConditions.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
)
