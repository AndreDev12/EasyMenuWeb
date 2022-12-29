import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import { ProductDetails } from './ProductDetails';

const Product = () => {

    return (
        <Container className={classNames('topics')}>
            <Container>
                <ProductDetails />
            </Container>
        </Container>
    )
}

Product.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
);

export default Product;