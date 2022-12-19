import { useRouter } from 'next/router';

import { LayoutWrapper } from '../../common/layouts';

const Product = () => {
    const router = useRouter();
    const { pid } = router.query;
    console.log(pid);

    return <p>Product: {pid}</p>
}

Product.getLayout = (children: React.ReactNode) => (
    <LayoutWrapper>{children}</LayoutWrapper>
);

export default Product;