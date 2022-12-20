import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import { ProductDetails } from './ProductDetails';

const Product = () => {

    return (
        <Container padding='1rem' className={classNames('topics')}>
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