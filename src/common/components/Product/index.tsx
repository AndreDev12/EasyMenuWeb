import { useContext } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import {
  Card,
  Container,
  Icon,
  RichText,
  Title,
  Image
} from '@gamiui/standard';

import { ThemeContext } from '../../../context/ThemeContext';
import { lightTheme } from '../../../../styles/design-system/theme';
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
      <Card width='fit' shadow='xs' rounded='md'>
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
          title={<S.ProductName text={title} />}
          description={
            <Container>
              <RichText text={description} />
            </Container>
          }
        />
        <S.CardFooter>
          <Container
            className={classNames('flex', 'justify-between')}
            margin='0 0 1rem'
          >
            <Icon name='heart' color={`${lightTheme.primary.first}`} />
            <Title level='h3'>S/{price}</Title>
          </Container>
          <Container>
            <Link href={`/${categoryName.toLowerCase().replace(' ', '-')}/product/${id}`}>
              <S.ProductButton
                type='button'
                rounded='sm'
              >
                Ver
              </S.ProductButton>
            </Link>
          </Container>
        </S.CardFooter>
      </Card>
    </S.Product>
  );
};