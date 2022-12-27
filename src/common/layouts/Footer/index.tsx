import * as React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
// import { Container, Button, Icon } from '@gamiui/standard';

import * as S from './styles';

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterSection
        className={classNames('flex')}
      >
        <S.FooterText>
          <S.LogoFooter
            padding='1rem'
          >
            <Link href='/'>
              <S.BrandTitle>Logo</S.BrandTitle>
            </Link>
          </S.LogoFooter>
        </S.FooterText>
      </S.FooterSection>
    </S.Footer>
    // <Container
    //   height='full'
    //   padding='1rem'
    //   className={classNames('footer', 'flex', 'justify-center', 'items-center')}
    // >
    //   <Button rounded='lg' preffix={<Icon name='bullet' color='white' />}>
    //     Crear Tópico
    //   </Button>
    // </Container>
  );
};
