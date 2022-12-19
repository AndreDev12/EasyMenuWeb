import { Container, RichText, Title } from '@gamiui/standard';
import * as S from './styles';

export const ProductDetails = () => {
  return (
    <S.ProductDetails>
        <Container>
            <Title 
                level='h2'
                margin='1rem 0'
            >Ceviche</Title>
            <RichText 
                margin='1rem 0'
                text='Food with sea food ingredients.' 
            />
        </Container>
        <Container></Container>
    </S.ProductDetails>
  )
}