import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import classNames from 'classnames';
import {
  Container,
  Modal,
  Pagination,
  Empty,
  Loader
} from '@gamiui/standard';

import { lightTheme } from '../../styles/design-system/theme';
import { Categories } from '../common/components/Categories';
import { News } from '../common/components/News';
import { IProduct, Product } from '../common/components/Product';
import { LayoutWrapper } from '../common/layouts';
import { ThemeContext } from '../context/ThemeContext';
import useDebounce from '../common/components/hooks/useDebounce';
import { get } from '../config/api';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [productsByPage, setProductsByPage] = useState<IProduct[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const { idCategory, value, page, setPage } = useContext(ThemeContext);
  const debouncedValue = useDebounce(value, 500);

  const SIZE_BY_PAGE = 5;
  let pageNumber = 1 + page;
  const numberPages = Math.ceil(totalItems / SIZE_BY_PAGE);

  useEffect(() => {
    // setLoading(true);
    try {
      get(
        `dishes/categories/${idCategory}?page=${pageNumber}&sizeByPage=${SIZE_BY_PAGE}&search=${debouncedValue}`
      ).then((res) => {
        setProductsByPage(res.data);
        setTotalItems(res.metaData.pagination.totalItems);
        setLoading(false);
        setShowMessage(false);
        console.log(res);
        !res.data.length && setShowMessage(true);
      })
    } catch (e) {
      console.log(e);
    }
  }, [idCategory, pageNumber, debouncedValue]);

  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(false);

  const handleChangePage = (page: number) => {
    console.log('test', page);
    setPage(page);
  };

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
          {loading ? (
            <Loader.Wrapper children={React.Children}>
              <Loader type="spinner"></Loader>
            </Loader.Wrapper>
          ) : 
          productsByPage?.map(
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
            showMessage && (
              <Empty text='No encontramos ningún producto para la búsqueda, intente con otro nombre.' />
            )
          }
        </Container>

        <Container>
          {numberPages >= 1 && (
            <Pagination
              numberPages={numberPages}
              initialPage={0}
              onChangePage={(page) => handleChangePage(page)}
              page={page}
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