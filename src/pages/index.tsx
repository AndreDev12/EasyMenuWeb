import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import classNames from 'classnames';
import {
  Button,
  Container,
  Icon,
  Modal,
  Pagination,
  Tab,
} from '@gamiui/standard';

import { lightTheme } from '../../styles/design-system/theme';
import { Categories } from '../common/components/Categories';
import { News } from '../common/components/News';
import { IProduct, Product } from '../common/components/Product';
import { LayoutWrapper } from '../common/layouts';
// import { productsByCategory } from '../common/mocks/products';
import { ThemeContext } from '../context/ThemeContext';
import { get } from '../config/api';

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const [totalProducts, setTotalProducts] = useState<IProduct[]>([]);
  const [productsByPage, setProductsByPage] = useState<IProduct[]>([]);
  const { idCategory } = useContext(ThemeContext);
  
  const PRODUCTS_BY_PAGE = 16;
  const numberPages = Math.ceil((totalProducts?.length??0) / PRODUCTS_BY_PAGE);
  // console.log(numberPages);

  // useEffect(() => {
  //   findProductsByCategory();
  // }, [idCategory])

  useEffect(() => {
    try {
      get('dishes')
        .then(res => {
          setTotalProducts(res.data)
          setProductsByPage(res.data.slice(0, 16))
        })
    } catch (e) {
      console.log(e);
    }
  }, [])
  console.log(totalProducts);
  console.log(productsByPage);

  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(false);

  // const findProductsByCategory = () => {
  //   let category = productsByCategory.find((category) => {
  //     const { categoryId } = category;
  //     if (idCategory === categoryId) {
  //       return category;
  //     }
  //   });

  //   if (!category) return;
  //   const { products } = category;

  //   setTotalProducts(products);
  //   setProductsByPage(products.slice(0, 16));
  // };
  console.log(productsByPage);
  
  const handleChangePage = (page: number) => {
    console.log('test', page);
    let result = totalProducts?.slice(page * PRODUCTS_BY_PAGE, (page + 1) * PRODUCTS_BY_PAGE);
    setProductsByPage(result);
    // console.log(result);
  };
  // (0, 16) - 16 productos
  // (16, 32) - 16 productos
  // (32, 48) - 16 productos

  return (
    <React.Fragment>
      <Modal visible={visible} onClose={onClose} title='This is my title'>
        <p style={{ padding: '1rem' }}>Hola como estas</p>
      </Modal>

      <Container padding='1rem' className={classNames('topics')}>
        <Container>
          <Categories />
        </Container>

        <Container margin='1rem 0'>
          <News
            title='Mira nuestras últimas ofertas!'
            description='Válido hasta el 14-12-22'
            backgroundColor={lightTheme.primary.first}
            color={lightTheme.neutral[800]}
            backgroundImg=''
          />
        </Container>

        <Container 
          className={classNames('topics__header', 'grid')}
          style={{ 
            gridTemplateColumns: 'repeat(auto-fill, minmax(25rem, 1fr))',
            gap: '1rem'
          }}
        >
          {productsByPage?.map(
            ({ description, id, imageUrl, price, title }: IProduct) => (
              <Product
                key={id}
                description={description}
                imageUrl={imageUrl}
                price={price}
                title={title}
              />
            )
          )}
        </Container>

        <Container>
          {
            numberPages >= 1 &&
            (<Pagination
                numberPages={numberPages}
                initialPage={0}
                onChangePage={page => handleChangePage(page)}
            />)
          }
        </Container>
      </Container>
    </React.Fragment>
  );
}

Home.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);