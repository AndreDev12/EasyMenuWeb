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

import * as S from './styles';

export interface IProduct {
  description: string;
  id?: number;
  imageUrl: string;
  price: number;
  title: string;
}

export const Product = ({ description, id, imageUrl, price, title }: IProduct) => {

  return (
    <S.Product>
      <Card width='fit' shadow='xs' rounded='xs'>
        <Link href={`/product/${id}`}>
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
            style={{ marginBottom: '1rem' }}
          >
            <Icon name='heart' />
            <Title level='h3'>S/{price}</Title>
          </Container>
          <Container>
            <Link href={`/product/${id}`}>
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