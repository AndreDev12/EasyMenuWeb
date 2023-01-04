import { useContext } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import {
  Button,
  Card,
  Container,
  Icon,
  RichText,
  Title,
  Image
} from '@gamiui/standard';

import { ThemeContext } from '../../../context/ThemeContext';
import * as S from './styles';

export interface IProduct {
  description: string;
  id?: number;
  imageUrl: string;
  price: number;
  title: string;
}

export const Product = ({ description, id, imageUrl, price, title }: IProduct) => {
  const { categoryName } = useContext(ThemeContext);

  return (
    <S.Product>
      <Card width='fit' shadow='xs' rounded='xs'>
        <Link href={`/${categoryName.toLowerCase().replace(' ', '-')}/product/${id}`}>
          <Card.Cover>
            <Image
              alt={title}
              src={imageUrl}
              width='100%'
            />
          </Card.Cover>
        </Link>
        <Card.Content
          title={<RichText text={title} style={{textTransform: 'uppercase'}} />}
          description={
            <Container>
              <RichText text={description} />
            </Container>
          }
        />
        <S.CardFooter>
          <Container
            className={classNames('flex', 'justify-between')}
            // style={{ marginBottom: '1rem' }}
            margin='0 0 1rem 0'
          >
            <Icon name='heart' />
            <Title level='h3'>S/{price}</Title>
          </Container>
          <Container>
            <Link href={`/${categoryName.toLowerCase().replace(' ', '-')}/product/${id}`}>
              <Button
                type='button'
                rounded='sm'
                height='auto'
                variant='primary'
                width='full'
              >
                View
              </Button>
            </Link>
          </Container>
        </S.CardFooter>
      </Card>
    </S.Product>
  );
};