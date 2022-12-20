import styled from '@emotion/styled';
import { Container, Link, Icon, Title, RichText } from '@gamiui/standard';

export const ProductDetails = styled(Container)`
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 8px 32px 0 rgb(31 38 135 / 7%);
    display: flex;
    padding: 2rem;
`;

// export const BackLink = styled(Link)`
//     align-items: center;
//     background: rgba(255, 255, 255, 0.35);
//     display: flex;
//     gap: .5rem;
//     height: 1.8rem;
//     margin-bottom: 2rem;
// `;

export const BackIcon = styled(Icon)`
    display: inline;
`;

export const ProductTitle = styled(Title)`
    margin-block: 0 1.7rem;
`;

export const ProductDescription = styled(RichText)`
    margin-block: 0 1.7rem;
`;

export const Selections = styled(Container)`
    
`;