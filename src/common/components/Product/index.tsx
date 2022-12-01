import Link from 'next/link';
import {
  Button,
  Card,
  Container,
  Icon,
  RichText,
  Title,
} from '@gamiui/standard';
import classNames from 'classnames';

import * as S from './styles';

export interface IProduct {
  src: string;
  title: string;
  description: string;
  price: number;
}

export const Product = ({src, title, description, price}: IProduct) => {

  return (
    <S.Product>
      <Card width='fit' shadow='xs' rounded='xs'>
        <Link href=''>
          <Card.Cover>
            <img
              alt=''
              width='100%'
              src={src}
            />
          </Card.Cover>
        </Link>
        <Card.Content
          title={<RichText text={title} />}
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
            <Title level='h3'>{price}</Title>
          </Container>
          <Container>
            <Link href=''>
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