import Link from 'next/link';
import classNames from 'classnames';
import { Container, RichText } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import { lightTheme } from '../../../styles/design-system/theme';
import * as S from './styles';

export default function Custom404() {
  return (
    <Container padding='1rem' className={classNames('topics')}>
      <S.ErrorPage>
        <S.ContentError>
          <S.ErrorTitle level='h2'>Lo sentimos</S.ErrorTitle>
          <S.ErrorImagen level='h3'>404</S.ErrorImagen>
          <RichText text='No se pudo encontrar esta página.' fontWeight='bold' />
        </S.ContentError>
        <Link 
          href='/' 
          style={{ 
            background: lightTheme.semantic.danger,
            borderRadius: '25px',
            color: lightTheme.primary.white,
            maxWidth: '100%',
            padding: '14px 20px 14px',
            textAlign: 'center',
            textTransform: 'uppercase', 
            width: '200px',
          }}
        >Volver al inicio</Link>
      </S.ErrorPage>
    </Container>
  )
}

Custom404.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
)