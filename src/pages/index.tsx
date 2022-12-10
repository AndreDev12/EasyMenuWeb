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
import { ThemeContext } from '../context/ThemeContext';
import { get } from '../config/api';

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const [productsByPage, setProductsByPage] = useState<IProduct[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [page, setPage] = useState(0);
  const { idCategory, searchDebounce } = useContext(ThemeContext);
  // const [totalProducts, setTotalProducts] = useState<IProduct[]>([]);

  const SIZE_BY_PAGE = 5;
  let pageNumber = 1 + page;
  const numberPages = Math.ceil(totalItems / SIZE_BY_PAGE);
  // const PRODUCTS_BY_PAGE = 16;
  // const numberPages = Math.ceil((totalProducts?.length??0) / PRODUCTS_BY_PAGE);
  // console.log(numberPages);

  // useEffect(() => {
  //   findProductsByCategory();
  // }, [idCategory])
  // /dishes/categories/1?page=1&sizeByPage=3

  // useEffect(() => {
  //   try {
  //     get('dishes')
  //       .then(res => {
  //         setTotalProducts(res.data)
  //         setProductsByPage(res.data.slice(0, 16))
  //       })
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, [])

  useEffect(() => {
    try {
      get(
        `dishes/categories/${idCategory}?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}&search={${searchDebounce}}`
      ).then((res) => {
        setProductsByPage(res.data);
        setTotalItems(res.metaData.pagination.totalItems);
        console.log(res);
      });
    } catch (e) {
      console.log(e);
    }
  }, [idCategory, pageNumber, searchDebounce]);

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

  const handleChangePage = (page: number) => {
    console.log('test', page);
    setPage(page);
    // let result = totalProducts?.slice(page * SIZE_BY_PAGE, (page + 1) * SIZE_BY_PAGE);
    // setProductsByPage(result);
    // console.log(result);
  };
  // (0, 5) - 5 productos
  // (5, 10) - 5 productos
  // (10, 15) - 5 productos
  // (15, 20) - 1 producto

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
            gap: '1rem',
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
          {numberPages >= 1 && (
            <Pagination
              numberPages={numberPages}
              initialPage={0}
              onChangePage={(page) => handleChangePage(page)}
            />
          )}
        </Container>
      </Container>
    </React.Fragment>
  );
}

Home.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);