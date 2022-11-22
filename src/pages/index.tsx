import * as React from 'react';
import classNames from 'classnames';
import { Button, Container, Icon, Modal, Tab } from '@gamiui/standard';

import { lightTheme } from '../../styles/design-system/theme';
import { Categories } from '../common/components/Categories';
import { News } from '../common/components/News';
import { Product } from '../common/components/Product';
import { LayoutWrapper } from '../common/layouts';
// import styled from '@emotion/styled';

export default function Home() {
  const [visible, setVisible] = React.useState(false);

  const onOpen = () => setVisible(true);

  const onClose = () => setVisible(false);

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
            backgroundImg={''}
          />
        </Container>

        <Container className={classNames('topics__header', 'flex')}>
          <Product />
        </Container>
      </Container>
    </React.Fragment>
  );
}

Home.getLayout = (children: React.ReactNode) => (
  <LayoutWrapper>{children}</LayoutWrapper>
);
