import * as React from 'react';
import { useContext } from 'react';
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
import { productsByCategory } from '../common/mocks/products';
import { ThemeContext } from '../context/ThemeContext';

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const { id } = useContext(ThemeContext);

  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(false);

  const findProductsByCategory = () => {
    let category = productsByCategory.find((category) => {
      const { categoryId } = category;
      if (id === categoryId) {
        return category;
      }
    });

    if (!category) return;
    const { products } = category;

    return products;
  };
  const handleChangePage = (page: number) => {
    console.log('test', page);
  };

  const products = findProductsByCategory();

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

        <Container className={classNames('topics__header', 'grid')}>
          {products?.map(
            ({ src, title, description, price }: IProduct, index) => (
              <Product
                key={index}
                src={src}
                title={title}
                description={description}
                price={price}
              />
            )
          )}
        </Container>

        <Container>
          <Pagination
            numberPages={5}
            initialPage={0}
            onChangePage={handleChangePage}
          />
        </Container>
      </Container>
    </React.Fragment>
  );
}

Home.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);