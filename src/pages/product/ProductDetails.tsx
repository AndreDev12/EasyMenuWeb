import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Container } from '@gamiui/standard';

import * as S from './styles';
import { lightTheme } from '../../../styles/design-system/theme';
import { get } from '../../config/api';

export const ProductDetails = () => {
  const router = useRouter();
    const { pid } = router.query;
    console.log(pid);

  useEffect(() => {
    try {
      get(`dishes/${pid}`)
        .then(res => console.log(res.data))
    } catch (e) {
      console.log(e);
    }
  }, [])
  

  return (
    <S.ProductDetails>
        <Container>
            {/* <Link href='/' passHref legacyBehavior>
              <S.BackLink>
                <S.BackIcon name='setting' color={lightTheme.neutral[300]} />
                  Atrás
              </S.BackLink>
            </Link> */}
            <S.ProductTitle level='h1'>
              Ceviche
            </S.ProductTitle >
            <S.ProductDescription text='Food with sea food ingredients.' />
            <S.Selections></S.Selections>
        </Container>
        <Container></Container>
    </S.ProductDetails>
  )
}