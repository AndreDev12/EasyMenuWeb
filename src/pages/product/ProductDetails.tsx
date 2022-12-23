import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Container, Image } from '@gamiui/standard';

import * as S from './styles';
import { lightTheme } from '../../../styles/design-system/theme';
import { get } from '../../config/api';

export const ProductDetails = () => {
  const [dishInfo, setDishInfo] = useState({
    description: '',
    imageUrl: '',
    price: 0,
    title: ''
  });
  const [dishSauces, setDishSauces] = useState([]);
  const [dishDishes, setDishDishes] = useState([]);

  const { description, imageUrl, price, title } = dishInfo;

  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    async function dishesIdfetch(){
      try{
        const result = await get(`dishes/${pid}`);
        const { dishSauces, dishDishes } = result.data;
        const { description, imageUrl, price, title } = result.data.dishInfo;
        setDishInfo({
          description: description,
          imageUrl: imageUrl,
          price: price,
          title: title
        })
        setDishSauces(dishSauces);
        setDishDishes(dishDishes);
      }catch(e){
        console.log(e);
      }
    }
    dishesIdfetch();
  }, [])

  return (
    <S.ProductDetails>
      <Container>
        <Link 
          href='/'
          className={classNames('flex')}
          style={{ marginBottom: '1.8rem', columnGap: '2rem' }}
        >
          <S.BackIcon name='setting' color={lightTheme.neutral[300]} />
            Atrás
        </Link>
        <S.ProductTitle level='h1'>{title}</S.ProductTitle >
        <S.ProductDescription text={description} />
        <S.Selections>
          <Container>
            <S.SaucesArea>
              <S.SaucesTitle level='h5'>Elige tus salsas</S.SaucesTitle>
              {
                dishSauces?.map(
                  ({ sauce }) => {
                    const { id, price, title} = sauce[0];
                    return (
                      <Container key={id}>
                        <label style={{ marginRight: '2rem' }}>{title}</label>
                        <label>{price}</label>
                      </Container>)
                  }
                )
              }
            </S.SaucesArea>
          </Container>
          <Container>
            <S.DishesArea>
              <S.DishesTitle level='h5'>Elige otros platos</S.DishesTitle>
              {
                dishDishes.map(
                  ({ dishSecond }) => {
                    const { id, price, title} = dishSecond[0];
                    return (
                      <Container key={id}>
                        <label style={{ marginRight: '2rem' }}>{title}</label>
                        <label>{price}</label>
                      </Container>
                    )
                  }
                )
              }
            </S.DishesArea>
          </Container>
        </S.Selections>
      </Container>
      <S.PriceImageContainer className={classNames('flex')}>
        <Image
          alt={title}
          src={imageUrl} 
          width='20rem' 
        />
        <S.ProductPriceDetails>S/ {price}</S.ProductPriceDetails>
        <S.DetailsProductButton variant='danger'>Agregar</S.DetailsProductButton>
      </S.PriceImageContainer>
    </S.ProductDetails>
  )
}