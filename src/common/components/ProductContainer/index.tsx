import classNames from 'classnames';

import { IProduct, Product } from '../Product';
import * as S from './styles';

interface IProductContainer{
    isLoading: boolean;
    productsByPage: IProduct[];
}

export const ProductContainer = ({isLoading, productsByPage}: IProductContainer) => {
  return (
    <S.ProductContainer className={classNames('topics__header')}>
        {
            !isLoading && (
              productsByPage?.map(
                ({ description, id, imageUrl, price, title }: IProduct) => (
                  <Product
                    key={id}
                    id={id}
                    description={description}
                    imageUrl={imageUrl}
                    price={price}
                    title={title}
                  />
                )
              )
            )
        }
    </S.ProductContainer>
  )
}