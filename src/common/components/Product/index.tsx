import {
  Button,
  Card,
  Container,
  Icon,
  RichText,
  Title,
} from '@gamiui/standard';
import classNames from 'classnames';

import { productsByCategory } from '../../mocks/products';
import * as S from './styles';

export const Product = () => {
  
  let id = 1;

  let category = productsByCategory.find(( category )  => {
    const { categoryId } = category;
    if(id === categoryId){
        return category;
    }
  })

  console.log(category?.products);

  return (
    <S.Product>
      <Card width='fit' shadow='xs' rounded='xs'>
        <Card.Cover>
          <img
            alt=''
            width='100%'
            src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          />
        </Card.Cover>
        <Card.Content
          title={<RichText text='**Arroz con pollo**' />}
          description={
            <Container>
              <RichText text='Comida criolla acompañada con cremas incluidas' />
            </Container>
          }
        />
        <S.CardFooter>
          <Container
            className={classNames('flex', 'justify-between')}
            style={{ marginBottom: '1rem' }}
          >
            <Icon name='heart' />
            <Title level='h3'>S/35.00</Title>
          </Container>
          <Container>
            <Button
              type='button'
              rounded='sm'
              height='auto'
              variant='primary'
              width='full'
            >
              View
            </Button>
          </Container>
        </S.CardFooter>
      </Card>
    </S.Product>
  );
};
