import * as React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Icon } from '@gamiui/standard';

import * as S from './styles';
import { lightTheme } from '../../../../styles/design-system/theme';

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
        <S.FooterMenu
          className={classNames('flex', 'items-center')}
        >
          <S.Information level='h3'>información</S.Information>
          <S.LinkContainer
            className={classNames('flex')}
          >
            <Link href='/'>Carta</Link>
            <Link href='/'>Nosotros</Link>
          </S.LinkContainer>
        </S.FooterMenu>
        <S.FooterMenu
          className={classNames('flex', 'items-center')}
        >
          <S.Legal level='h3'>legal</S.Legal>
          <S.LinkContainer
            className={classNames('flex')}
          >
            <Link href='/'>Términos y condiciones</Link>
            <Link href='/'>Políticas de privacidad</Link>
          </S.LinkContainer>
        </S.FooterMenu>
        <S.SocialBlock
          className={classNames('flex')}
        >
          <S.SocialFollow level='h3'>síguenos en:</S.SocialFollow>
          <S.SocialMedia
            className={classNames('flex')}
          >
            <Link 
              href='/' 
              style={{ 
                border: `1px solid ${lightTheme.primary.white}`,
                borderRadius: '50%',
                padding: '0.3rem',
              }}
            ><Icon
              color={`${lightTheme.primary.white}`}
              name='youtube'
            />
            </Link>
            <Link 
              href='/' 
              style={{ 
                border: `1px solid ${lightTheme.primary.white}`,
                borderRadius: '50%',
                padding: '0.3rem',
              }}
            ><Icon
              color={`${lightTheme.primary.white}`}
              name='facebook'
            />
            </Link>
            <Link 
              href='/' 
              style={{ 
                border: `1px solid ${lightTheme.primary.white}`,
                borderRadius: '50%',
                padding: '0.3rem',
              }}
            ><Icon
              color={`${lightTheme.primary.white}`}
              name='twitter'
            />
            </Link>
          </S.SocialMedia>
        </S.SocialBlock>
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
