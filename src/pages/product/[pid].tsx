import { useRouter } from 'next/router';
import classNames from 'classnames';
import { Container } from '@gamiui/standard';

import { LayoutWrapper } from '../../common/layouts';
import { ProductDetails } from './ProductDetails';

const Product = () => {
    const router = useRouter();
    const { pid } = router.query;
    console.log(pid);

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